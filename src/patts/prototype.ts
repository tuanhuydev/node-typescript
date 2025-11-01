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

	attackPlayer() {
		console.log(`Zombie attacks with ${this.attack} power!`);
	}

	move() {
		console.log(`Zombie moves at speed ${this.speed}.`);
	}
	
	clone(): Zombie {
		return new Zombie(this.attack, this.health, this.speed);
	}
}

class GameScene {
	zombies: Zombie[] = [];

	addZombie(zombie: Zombie) {
		this.zombies.push(zombie);
	}
	start() {
		this.zombies.forEach((zombie) => {
			zombie.attackPlayer();
			zombie.move();
		});
	}
}
//// LET'S PLAY ////

const scene = new GameScene();

const baseZombie = new Zombie(10, 100, 5);

scene.addZombie(baseZombie);

for (let i = 0; i < 5; i++) {
	scene.addZombie(baseZombie.clone());
}

//// BOSS FIGHT ////
const boss = baseZombie.clone();
boss.attack = 200;
boss.health = 1000;
const anotherBoss = boss.clone();

scene.addZombie(boss);
scene.addZombie(anotherBoss);

scene.start();
