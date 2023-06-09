class Car {
	#doors: number;
	#engine: string;
	#color: string;

	private static instance: Car;

	constructor(doors: number, engine: string, color: string) {
		this.#doors = doors;
		this.#engine = engine;
		this.#color = color;
	}

	static makeCar(doors: number, engine: string, color: string) {
		if (!Car.instance) {
			Car.instance = new Car(doors, engine, color);
		}
		return Car.instance;
	}
	toString() {
		return `[CAR INFO] doors: ${this.#doors}, engine: ${this.#engine}, color: ${this.#color}`;
	}
}

const civic = Car.makeCar(4, "v6", "blue");
const anotherCivic = Car.makeCar(4, "v6", "green");

console.log(anotherCivic.toString());
console.log(civic.toString());
