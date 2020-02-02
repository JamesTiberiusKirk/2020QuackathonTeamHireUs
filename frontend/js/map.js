import * as THREE from './threejs/build/three.module.js';

import { OrbitControls } from './threejs/examples/jsm/controls/OrbitControls.js';

const RADIUS = 7;
const WIDTH_SEGMENTS = 1000;
const HEIGHT_SEGMENTS = 1000;
var camera, scene, renderer, controls;
let points = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)

    camera.position.z = 10;
}

function load_world() {
    var group = new THREE.Group();
    var points = [];
    var texture = new THREE.TextureLoader().load('map.png');
    var geometry = new THREE.SphereGeometry(RADIUS, WIDTH_SEGMENTS, HEIGHT_SEGMENTS);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var sphere = new THREE.Mesh(geometry, material);
    //controls = new OrbitControls(camera, renderer.domElement);

    for(var i = 0; i < 10; i++) {
        console.log(sphere.geometry.vertices[i]);
    }
    
    var point_geometry = new THREE.SphereGeometry(1/RADIUS, 50, 50);
    var point_material = new THREE.MeshBasicMaterial({color: 0xffffff});
    
    for(var i = 100; i < 200; i++) {
        var point = new THREE.Mesh(point_geometry, point_material);
        point.position.set(sphere.geometry.vertices[i].x, sphere.geometry.vertices[i].y, sphere.geometry.vertices[i].z);
        points.push(point);
    }

    for(var i = 0; i < points.length; i++) {
        group.add(points[i]);
    }
    group.add(sphere);
    scene.add(group);
    controls = new OrbitControls(camera, renderer.domElement);
}

function load_points() {
    var geometry = new THREE.CircleGeometry(2, 20);
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var point = new THREE.Mesh(geometry, material);

   
    scene.add(point);
    
}

var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

init();
load_world();
//load_points();
animate();

