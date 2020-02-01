var map_scene = scene_setup(75, window.innerWidth/window.innerHeight, 0.01, 1000);
map_scene.renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(scene.renderer.domElement)

var geometry = new THREE.SphereGeometry(5, 30, 30);
var material = new THREE.MeshbasicMaterial({color: blue});
var sphere = new THREE.Mesh(geometry, material);
map_scene.scene.add(cube);

map_scene.camera.position.z = 5;

render(map_scene);