import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

class ThreeJSAnimation extends Component<any, any> {
  private mount: HTMLDivElement | null = null;
  componentDidMount() {
    (function () {
      // Set our main variables
      let scene: THREE.Scene,
        renderer: THREE.WebGLRenderer,
        camera: THREE.PerspectiveCamera,
        model: THREE.Group, // Our character
        neck: THREE.Bone | null, // Reference to the neck bone in the skeleton
        waist: THREE.Bone | null, // Reference to the waist bone in the skeleton
        mixer: THREE.AnimationMixer, // THREE.js animations mixer
        idle: THREE.AnimationAction, // Idle, the default state our character returns to
        clock: THREE.Clock = new THREE.Clock(); // Used for anims, which run to a clock instead of frame rate

      init();

      function init() {
        const MODEL_PATH: string =
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb";
        const backgroundColor: number = 0x0a192f;
        // Init the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(backgroundColor);
        scene.fog = null;

        // Init the renderer
        renderer = new THREE.WebGLRenderer({
          alpha: true
        });
        renderer.shadowMap.enabled = true;
        renderer.setSize(0.35 * window.innerWidth, 0.35 * window.innerHeight);
        var container = document.getElementById("gazi-model");
        if (container) {
          container.appendChild(renderer.domElement);
        }

        // Add a camera
        camera = new THREE.PerspectiveCamera(
          65,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 30;
        camera.position.x = 0;
        camera.position.y = -3;

        const stacy_mtl: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
          color: 0xccd6f6,
        });

        var loader: GLTFLoader = new GLTFLoader();

        loader.load(
          MODEL_PATH,
          function (gltf: { scene: THREE.Group; animations: THREE.AnimationClip[] }) {
            // A lot is going to happen here
            model = gltf.scene;
            let fileAnimations: THREE.AnimationClip[] = gltf.animations;

            model.traverse((o: THREE.Object3D) => {
              if ((o as THREE.Mesh).isMesh) {
                const mesh = o as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.material = stacy_mtl;
              }
              // Reference the neck and waist bones
              if ((o as THREE.Bone).isBone && o.name === "mixamorigNeck") {
                neck = o as THREE.Bone;
              }
              if ((o as THREE.Bone).isBone && o.name === "mixamorigSpine") {
                waist = o as THREE.Bone;
              }
            });

            // Set the models initial scale
            model.scale.set(15, 15, 15);
            model.position.y = -23;

            scene.add(model);
            mixer = new THREE.AnimationMixer(model);
            let idleAnim: THREE.AnimationClip | null = THREE.AnimationClip.findByName(
              fileAnimations,
              "idle"
            );
            if (idleAnim) {
              idleAnim.tracks.splice(3, 3);
              idleAnim.tracks.splice(9, 3);
              idle = mixer.clipAction(idleAnim);
              idle.play();
            } else {
              console.warn("Idle animation not found.");
            }
          },
          undefined, // We don't need this function
          function (error: unknown) {
            console.error(error);
          }
        );

        // Add lights
        let hemiLight: THREE.HemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
        hemiLight.position.set(0, 50, 0);
        // Add hemisphere light to scene
        scene.add(hemiLight);

        let d: number = 8.25;
        let dirLight: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.54);
        dirLight.position.set(-8, 12, 8);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 1500;
        dirLight.shadow.camera.left = d * -1;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = d * -1;
        // Add directional Light to scene
        scene.add(dirLight);

        // Floor
        let floorGeometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
        let floorMaterial: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
          color: 0x0a192f,
          shininess: 0
        });

        let floor: THREE.Mesh = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -0.5 * Math.PI; // This is 90 degrees by the way
        floor.receiveShadow = true;
        floor.position.y = -11;
        scene.add(floor);

        let geometry: THREE.SphereGeometry = new THREE.SphereGeometry(16, 46, 46);
        let material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
          color: 0x64ffda
        });
        let sphere: THREE.Mesh = new THREE.Mesh(geometry, material);
        sphere.position.z = -30;
        sphere.position.y = -2.5;
        sphere.position.x = -0.25;
        scene.add(sphere);
      }

      function update() {
        if (mixer) {
          mixer.update(clock.getDelta());
        }
        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
        requestAnimationFrame(update);
      }
      update();

      document.addEventListener("mousemove", function (e: MouseEvent) {
        var mousecoords: {x: number, y: number} = getMousePos(e);
        if (neck && waist) {
          moveJoint(mousecoords, neck, 50);
          moveJoint(mousecoords, waist, 30);
        }
      });

      function getMousePos(e: MouseEvent): {x: number, y: number} {
        return {
          x: e.clientX,
          y: e.clientY
        };
      }

      function moveJoint(mouse: {x: number, y: number}, joint: THREE.Bone, degreeLimit: number) {
        let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
        joint.rotation.y = THREE.MathUtils.degToRad(degrees.x);
        joint.rotation.x = THREE.MathUtils.degToRad(degrees.y);
      }

      function getMouseDegrees(x: number, y: number, degreeLimit: number): {x: number, y: number} {
        let dx: number = 0,
          dy: number = 0,
          xdiff: number,
          xPercentage: number,
          ydiff: number,
          yPercentage: number;

        let w: {x: number, y: number} = {
          x: window.innerWidth,
          y: window.innerHeight
        };

        // Left (Rotates neck left between 0 and -degreeLimit)

        // 1. If cursor is in the left half of screen
        if (x <= w.x / 2) {
          // 2. Get the difference between middle of screen and cursor position
          xdiff = w.x / 2 - x;
          // 3. Find the percentage of that difference (percentage toward edge of screen)
          xPercentage = (xdiff / (w.x / 2)) * 100;
          // 4. Convert that to a percentage of the maximum rotation we allow for the neck
          dx = ((degreeLimit * xPercentage) / 100) * -1;
        }
        // Right (Rotates neck right between 0 and degreeLimit)
        if (x >= w.x / 2) {
          xdiff = x - w.x / 2;
          xPercentage = (xdiff / (w.x / 2)) * 100;
          dx = (degreeLimit * xPercentage) / 100;
        }
        // Up (Rotates neck up between 0 and -degreeLimit)
        if (y <= w.y / 2) {
          ydiff = w.y / 2 - y;
          yPercentage = (ydiff / (w.y / 2)) * 100;
          // Note that I cut degreeLimit in half when she looks up
          dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
        }

        // Down (Rotates neck down between 0 and degreeLimit)
        if (y >= w.y / 2) {
          ydiff = y - w.y / 2;
          yPercentage = (ydiff / (w.y / 2)) * 100;
          dy = (degreeLimit * yPercentage) / 100;
        }
        return {
          x: dx,
          y: dy
        };
      }
    })();
  }
  render() {
    return <div ref={ref => { this.mount = ref; }} />;
  }
}

function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let canvasPixelWidth = canvas.width / window.devicePixelRatio;
  let canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize =
    canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

export default ThreeJSAnimation;
