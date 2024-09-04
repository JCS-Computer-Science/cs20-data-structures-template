/*
- return string of concat-ing all ‘ingredient’ properties of all objects separated by “, “
- same as above but only if “spicy” prop is false
- return T/F if “price” of object at specified index is bigger than other
*/
const rewire = require("rewire");
// const lib = rewire("../solutions/arrays-of-objects.js");
const lib = rewire("../arrays-of-objects.js");

let toppings;

beforeEach(() => {
	toppings = [
		{
			name: "cheese",
			price: 0.5,
			spicy: false,
			inStock: true,
		},
		{
			name: "bacon",
			price: 1.25,
			spicy: false,
			inStock: true,
		},
		{
			name: "sausage",
			price: 1,
			spicy: true,
			inStock: true,
		},
		{
			name: "jalapenos",
			price: 0.25,
			spicy: true,
			inStock: false,
		},
		{
			name: "bbq chicken",
			price: 2,
			spicy: false,
			inStock: false,
		},
	];
});

describe("listAllNames(arr)", () => {
	let listAllNames;
	beforeAll(() => {
		listAllNames = lib.__get__("listAllNames");
	});
	it('should return a string combining the "name" property of each object in the array, separated by ", "', () => {
		let result = listAllNames(toppings);
		expect(result).toBeDefined();
		expect(result).toEqual("cheese, bacon, sausage, jalapenos, bbq chicken");
	});
});
describe("listEachProperty(arr, key)", () => {
	let listEachProperty;
	beforeAll(() => {
		listEachProperty = lib.__get__("listEachProperty");
	});
	it('should return a string combining the specified property of each object in the array, separated by ", "', () => {
		let result = listEachProperty(toppings, "name");
		expect(result).toBeDefined();
		expect(result).toEqual("cheese, bacon, sausage, jalapenos, bbq chicken");
		result = listEachProperty(toppings, "price");
		expect(result).toBeDefined();
		expect(result).toEqual("0.5, 1.25, 1, 0.25, 2");
	});
});

describe("listFilteredNames(arr, filter)", () => {
	let listFilteredNames;
	beforeAll(() => {
		listFilteredNames = lib.__get__("listFilteredNames");
	});
	it('should return the same as listAllNames but only including objects with the required "filter" key having a value of "true"', () => {
		let result1 = listFilteredNames(toppings, "spicy");
		expect(result1).toBeDefined();
		expect(result1).toEqual("sausage, jalapenos");
		let result2 = listFilteredNames(toppings, "inStock");
		expect(result2).toBeDefined();
		expect(result2).toEqual("cheese, bacon, sausage");
	});
});

describe("isValueBigger(arr,key,i,j)", () => {
	let isValueBigger;
	beforeAll(() => {
		isValueBigger = lib.__get__("isValueBigger");
	});
	it('should return true or false if arr[i] has a larger value for property "key" than arr[j]', () => {
		expect(isValueBigger(toppings, "price", 0, 1)).toBe(false);
		expect(isValueBigger(toppings, "price", 4, 2)).toBe(true);
		expect(isValueBigger(toppings, "price", 3, 3)).toBe(false);
	});
});
