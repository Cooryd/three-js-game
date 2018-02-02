import GameController from './controller/GameController';
import World from './model/World';

export default class Application {
 
	constructor(){
		const world = new World();
		this.gameInstance = new GameController(world);
	}

}
