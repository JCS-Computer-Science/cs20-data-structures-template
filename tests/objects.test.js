/*
- return value of specific property
- add a new property
- return value of nested property
- return array of all keys
- return T/F if specific key exists
*/
const rewire = require("rewire");
// const lib = rewire("../solutions/objects.js");
const lib = rewire("../objects.js");

let myPokemon;

beforeEach(() => {
	myPokemon = {
		name: "Gengar",
		number: 94,
		stats: {
			hp: 60,
			attack: 65,
			defense: 60,
			speed: 110,
		},
		evolvesFrom: "Haunter",
	};
});

describe("getName(obj)", () => {
	let getName;
	beforeAll(() => {
		getName = lib.__get__("getName");
	});
	it("should return the value of 'obj's 'name' property", () => {
		expect(getName(myPokemon)).toEqual("Gengar");
	});
});

describe("getValue(obj, key)", () => {
	let getValue;
	beforeAll(() => {
		getValue = lib.__get__("getValue");
	});
	it("should return the value of property 'key' of 'obj'", () => {
		expect(getValue(myPokemon, "name")).toEqual("Gengar");
		expect(getValue(myPokemon, "number")).toEqual(94);
	});
});

describe("setValue(obj, key, val)", () => {
	let setValue;
	beforeAll(() => {
		setValue = lib.__get__("setValue");
	});
	it("should add a property 'key' with value 'val' to 'obj'", () => {
		setValue(myPokemon, "color", "purple");
		expect(myPokemon.color).toBeDefined();
		expect(myPokemon.color).toEqual("purple");
	});
});

describe("getNestedProperty(obj, key1, key2)", () => {
	let getNestedProperty;
	beforeAll(() => {
		getNestedProperty = lib.__get__("getNestedProperty");
	});
	it('should return the value of nested property "key2" of property "key1" of "obj"', () => {
		expect(getNestedProperty(myPokemon, "stats", "hp")).toBeDefined();
		expect(getNestedProperty(myPokemon, "stats", "hp")).toEqual(60);
		expect(
			getNestedProperty(myPokemon, "stats", "speed")
		).toBeDefined();
		expect(getNestedProperty(myPokemon, "stats", "speed")).toEqual(
			110
		);
	});
});

describe("getKeys(obj)", () => {
	let getKeys;
	beforeAll(() => {
		getKeys = lib.__get__("getKeys");
	});
	it('should return an array of all the keys in "obj"', () => {
		expect(getKeys(myPokemon)).toBeDefined();
		expect(getKeys(myPokemon)).toEqual([
			"name",
			"number",
			"stats",
			"evolvesFrom",
		]);
		expect(getKeys(myPokemon.stats)).toBeDefined();
		expect(getKeys(myPokemon.stats)).toEqual([
			"hp",
			"attack",
			"defense",
			"speed",
		]);
	});
});

describe("containsKey(obj, key)", () => {
	let containsKey;
	beforeAll(() => {
		containsKey = lib.__get__("containsKey");
	});
	it('should return true or false if "obj" has a property named "key"', () => {
		expect(containsKey(myPokemon, "evolvesFrom")).toBe(true);
		expect(containsKey(myPokemon, "evolvesInto")).toBe(false);
	});
});
