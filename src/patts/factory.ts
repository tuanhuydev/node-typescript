type ItemDetailType = {
	itemId: number;
	name: string;
};

type ItemType = "FOOD" | "DRINK";

class FoodItem {
	#itemId: number;
	#name: string;

	constructor(itemId: number, name: string) {
		this.#itemId = itemId;
		this.#name = name;
	}
	get make() {
		return this.#itemId + this.#name;
	}
}
class DrinkItem {
	#itemId: number;
	#name: string;

	constructor(itemId: number, name: string) {
		this.#itemId = itemId;
		this.#name = name;
	}
	get make() {
		return this.#itemId + this.#name;
	}
}

class ItemFactory {
	makeItem(type: ItemType, { itemId, name }: ItemDetailType) {
		switch (type) {
			case "FOOD":
				return new FoodItem(itemId, name).make;
			case "DRINK":
				return new DrinkItem(itemId, name).make;
			default:
				throw new Error("Order type is not support");
		}
	}
}

const coffeeItemFactory = new ItemFactory();
coffeeItemFactory.makeItem("DRINK", { itemId: 1, name: "black milk coffee" });
