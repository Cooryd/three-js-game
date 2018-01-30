import * as THREE from 'three';

export default class Application {
  constructor(containerElement) {
    this.objects = [];
    this.container = containerElement;
    this.initiateRenderer();
    this.createScene();
  }

  initiateRenderer(){
    this.renderer = new THREE.WebGLRenderer();
    this.CONTAINER_WIDTH = this.container.offsetWidth;
    this.CONTAINER_HEIGHT = this.container.offsetHeight;
    this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
    this.container.appendChild(this.renderer.domElement);
  }

  createScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, 1, 2000);
    this.camera.position.z = 20;

    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.renderer.render(this.scene, this.camera);
  }

}
