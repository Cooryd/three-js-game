import * as THREE from 'three';

export default class RenderingContext {
	constructor(scene, camera, renderer){
	    this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
	}
	
	static getDefault(domContainer){
		const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, domContainer.width / domContainer.height, 0.01, 1000);
        const renderer = new THREE.WebGLRenderer();
		
		//TODO: This should be refactored to make use of a config file.
		camera.position.z = 20;
        renderer.setSize(domContainer.width, domContainer.height);
        scene.add(new THREE.AmbientLight(0x333333));

        const light = new THREE.DirectionalLight(0xffffff, 1);

        light.position.set(15,15,15);
        scene.add(light);

        domContainer.node.appendChild(renderer.domElement);

        return new RenderingContext(scene, camera, renderer);
		
	}
}