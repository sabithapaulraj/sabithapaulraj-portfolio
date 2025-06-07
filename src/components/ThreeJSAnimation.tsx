import React, { Component } from "react";
import * as THREE from "three";

class ThreeJSAnimation extends Component<any, any> {
  private mount: HTMLDivElement | null = null;

  setMountRef = (ref: HTMLDivElement | null): void => {
    this.mount = ref;
  };

  componentDidMount() {
    var scene: THREE.Scene = new THREE.Scene();
    var camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(0.4 * window.innerWidth, 0.4 * window.innerHeight);

    var container = document.getElementById("content");
    if (container) {
      container.appendChild(renderer.domElement);
    }

    var geometry: THREE.BoxGeometry = new THREE.BoxGeometry(3, 3, 3);
    var material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube: THREE.Mesh = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={this.setMountRef} />;
  }
}
export default ThreeJSAnimation;
