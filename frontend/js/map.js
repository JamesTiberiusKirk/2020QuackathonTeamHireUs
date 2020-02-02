var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const RADIUS = 5;
const WIDTH_SEGMENTS = 20;
const HEIGHT_SEGMENTS = 20;

var texture = new THREE.TextureLoader().load('land_ocean_ice_cloud_2048.jpg');

var geometry = new THREE.SphereGeometry(RADIUS, WIDTH_SEGMENTS, HEIGHT_SEGMENTS);
var material = new THREE.MeshBasicMaterial({map: texture});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 10;

var animate = function() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.2;
    sphere.rotation.y += 0.2;
    renderer.render(scene, camera);
}

animate();

