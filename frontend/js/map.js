import * as THREE from './threejs/build/three.module.js';

import { OrbitControls } from './threejs/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const RADIUS = 7;
const WIDTH_SEGMENTS = 1000;
const HEIGHT_SEGMENTS = 1000;

var texture = new THREE.TextureLoader().load('map.png');

var geometry = new THREE.SphereGeometry(RADIUS, WIDTH_SEGMENTS, HEIGHT_SEGMENTS);
var material = new THREE.MeshBasicMaterial({ map: texture });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 10;
var controls = new OrbitControls(camera, renderer.domElement);

var animate = function () {
    requestAnimationFrame(animate);
    // sphere.rotation.x += 0.001;
    // sphere.rotation.y += 0.001;
    controls.update();
    renderer.render(scene, camera);
}

var render = function () {
    renderer.render(scene, camera);
}

animate();

