export default class DomContainer{
	constructor(containerId){
		this.node = document.getElementById(containerId);
		this.width = this.node.offsetWidth;
		this.height = this.node.offsetHeight;
	}
	
	updateSize(){
		this.width = this.node.offsetWidth;
		this.height = this.node.offsetHeight;
	}
	
}