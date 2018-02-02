import GameView from '../view/GameView';

export default class GameController {
	constructor(world){
		this.world = world;
		this.view = new GameView(this, world, 'canvas');
		this.view.initialize();
	}
}