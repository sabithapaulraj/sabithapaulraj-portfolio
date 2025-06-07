import React, { Component } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";

import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";

class ThreeJSAnimation extends Component<any, any> {
  private mount: HTMLDivElement | null = null;

  setMountRef = (ref: HTMLDivElement | null): void => {
    this.mount = ref;
  };

  componentDidMount() {
    let container: HTMLDivElement | null, stats: Stats;
    let camera: THREE.PerspectiveCamera, controls: TrackballControls, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

    init();
    animate();
    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      camera = new THREE.PerspectiveCamera(
        15,
        window.innerWidth / window.innerHeight,
        0.01,
        40
      );
      camera.position.x = 0.4;
      camera.position.z = -2;
      camera.up.set(0, 0, 1);

      scene.add(camera);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const loader = new PCDLoader();
      loader.load("./models/pcd/binary/Zaghetto.pcd", function (points: THREE.Points) {
        scene.add(points);
        const center = points.geometry.boundingSphere!.center;
        controls.target.set(center.x, center.y, center.z);
        controls.update();
      });

      container = document.createElement("div");
      document.body.appendChild(container);
      container.appendChild(renderer.domElement);

      controls = new TrackballControls(camera, renderer.domElement);

      controls.rotateSpeed = 2.0;
      controls.zoomSpeed = 0.3;
      controls.panSpeed = 0.2;

      controls.staticMoving = true;

      controls.minDistance = 0.3;
      controls.maxDistance = 0.3 * 100;

      stats = new Stats();
      container.appendChild(stats.dom);

      window.addEventListener("resize", onWindowResize);

      window.addEventListener("keypress", keyboard);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      controls.handleResize();
    }

    function keyboard(ev: KeyboardEvent) {
      const points = scene.getObjectByName("Zaghetto.pcd") as THREE.Points;

      switch (ev.key || String.fromCharCode(ev.keyCode || ev.charCode)) {
        case "+":
          (points.material as THREE.PointsMaterial).size *= 1.2;
          (points.material as THREE.PointsMaterial).needsUpdate = true;
          break;

        case "-":
          (points.material as THREE.PointsMaterial).size /= 1.2;
          (points.material as THREE.PointsMaterial).needsUpdate = true;
          break;

        case "c":
          (points.material as THREE.PointsMaterial).color.setHex(Math.random() * 0xffffff);
          (points.material as THREE.PointsMaterial).needsUpdate = true;
          break;
        default:
            break;
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      stats.update();
    }
  }
  render() {
    return <div ref={this.setMountRef} />;
  }
}
export default ThreeJSAnimation;
