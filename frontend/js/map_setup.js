var scene_setup = function(fov, aspect_ratio, near, far) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(fov, aspect_ratio, near, far);
    var renderer = new THREE.WebGLRenderer();

    return {
        scene: scene,
        camera: camera,
        renderer: renderer,
    }
}

var render = function(scene) {
    scene.renderer.render(scene.scene, scene.camera)
}

// var animate = function(scene, shape) {
//     requestAnimationFrame(animate);
//     shape.rotation.x += 0.01;
//     shape.rotation.y += 0.01;
//     scene.renderer.render(scene.scene, scene.camera);
// }
