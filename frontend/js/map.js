import * as THREE from './threejs/build/three.module.js';

import { OrbitControls } from './threejs/examples/jsm/controls/OrbitControls.js';

const RADIUS = 7;
const WIDTH_SEGMENTS = 100;
const HEIGHT_SEGMENTS = 100;
const lon_change = 28;
const container = document.getElementById('worldcanvas')

var camera, scene, renderer, controls;
let points = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement)

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

    for(var i = 0; i < sphere.geometry.vertices.length; i++) {
        console.log(sphere.geometry.vertices[i]);
    }
    
    var point_geometry = new THREE.SphereGeometry(0.07, 50, 50);
    var point_material = new THREE.MeshBasicMaterial({color: 0xffffff});
    
    // for(var i = 0; i < sphere.geometry.vertices.length; i++) {
    //     var point = new THREE.Mesh(point_geometry, point_material);
    //     point.position.set(sphere.geometry.vertices[i].x, sphere.geometry.vertices[i].y, sphere.geometry.vertices[i].z);
    //     points.push(point);
    // }

    // for(var i = 0; i < points.length; i++) {
    //     group.add(points[i]);
    // }

    var point = new THREE.Mesh(point_geometry, point_material);
    placeObjectOnPlanet(point, 36.5042, 99.5919-lon_change, RADIUS);
    group.add(sphere);
    group.add(point);
    scene.add(group);
    controls = new OrbitControls(camera, renderer.domElement);
}

function placeObjectOnPlanet(object, lat, lon, radius) {
    var latRad = lat * (Math.PI / 180);
    var lonRad = -lon * (Math.PI / 180);
    object.position.set(
        Math.cos(latRad) * Math.cos(lonRad) * radius,
        Math.sin(latRad) * radius,
        Math.cos(latRad) * Math.sin(lonRad) * radius
    );
    object.rotation.set(0.0, -lonRad, latRad - Math.PI * 0.5);
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

