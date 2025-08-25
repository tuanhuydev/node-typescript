// Prototype Pattern
class Zombie {
	public attack: number;
	public health: number;
	public speed: number;


	constructor(attack: number, health: number, speed: number) {
		this.attack = attack;
		this.health = health;
		this.speed = speed;
	}
	clone(): Zombie {
		return new Zombie(this.attack, this.health, this.speed);
	}
	attackPlayer() {
		console.log(`Zombie attacks with ${this.attack} power!`);
	}
	move() {
		console.log(`Zombie moves at speed ${this.speed}.`);
	}
	beingAttackedByPlayer(damage: number) {
		this.health -= damage;
		console.log(`Zombie takes ${damage} damage! Remaining health: ${this.health}`);
	}
}

class GameScene {
	zombies: Zombie[] = [];
	
	addZombie(zombie: Zombie) {
		this.zombies.push(zombie);
	}	
}
const level1 = new GameScene();
const baseZombie = new Zombie(10, 100, 5);
level1.addZombie(baseZombie);
level1.addZombie(baseZombie.clone());
level1.addZombie(baseZombie.clone());
level1.addZombie(baseZombie.clone());
level1.addZombie(baseZombie.clone());

/////////////////////////
const zombie1 = baseZombie.clone();
zombie1.attack = 20;
