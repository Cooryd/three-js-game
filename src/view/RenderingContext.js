import * as THREE from 'three';

export default class RenderingContext {
	constructor(scene, camera, renderer){
	    this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
	}

	static getDefault(domContainer){
		const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, domContainer.width / domContainer.height, 0.01, 10000);
        const renderer = new THREE.WebGLRenderer();

				//TODO: This should be refactored to make use of a config file.
				camera.position.z = 1000;
				camera.position.y = -800;
				camera.rotation.x = 45 * Math.PI / 180
        renderer.setSize(domContainer.width, domContainer.height);
        scene.add(new THREE.AmbientLight(0x333333));

        const light = new THREE.DirectionalLight(0xffffff, 1);

        light.position.set(15,15,15);
        scene.add(light);
				const geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
				const material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});
				const cube = new THREE.Mesh(geometry, material);
				scene.add(cube);


        domContainer.node.appendChild(renderer.domElement);

        return new RenderingContext(scene, camera, renderer);

	}
}
