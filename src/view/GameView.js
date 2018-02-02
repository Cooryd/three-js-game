import RenderingContext from './RenderingContext';
import DomContainer from './DomContainer';

export default class GameView {
	constructor(controller, world, containerId){
		this.domContainer = new DomContainer(containerId);
		this.controller = controller;
		this.world = world;
		this.renderingContext = RenderingContext.getDefault(this.domContainer);
	}
	
	initialize(){
		const scene = this.renderingContext.scene;
		//TODO: Add assets to scene here
		
		//TODO: Configure control listeners here
		
		window.addEventListener( 'resize', (e) => this.onWindowResize(), false );
		this.render();
	}
	
	render(){
        requestAnimationFrame(() => this.render());
		
		//TODO: Call world update function here.
		this.renderingContext.renderer.render(this.renderingContext.scene, this.renderingContext.camera);
	}
	
	onWindowResize(){
		this.domContainer.updateSize();
        this.renderingContext.camera.aspect = this.domContainer.width / this.domContainer.height;
        this.renderingContext.camera.updateProjectionMatrix();

        this.renderingContext.renderer.setSize(this.domContainer.width, this.domContainer.height);
    }
	
}