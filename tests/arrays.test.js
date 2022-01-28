const rewire = require("rewire");
const lib = rewire("../arrays.js");

describe("getLength(arr)", () => {
	it('should return the length of "arr"', () => {
		let arr = ["orange", "green", "pink"];
		expect(lib.__get__("getLength")(arr)).toEqual(3);
		arr = [];
		expect(lib.__get__("getLength")(arr)).toEqual(0);
	});
});

describe("getItemAtIndex(arr, i)", () => {
	it('should return the element of "arr" at index "i"', () => {});
});

describe("containsItem(arr, num)", () => {
	it('should return true or false if "arr" contains "num"', () => {});
});

describe("isEmpty(arr)", () => {
	it('should return true or false if "arr" is empty', () => {});
});

describe("addToArray(arr, num)", () => {
	it("should append 'num' to 'arr", () => {
		let arr = [1, 2, 3];
		expect(lib.__get__("addToArray")(arr, 4)).toEqual([1, 2, 3, 4]);
	});
});

describe("sum(arr)", () => {
	it('should return the sum of all elements in "arr" (assume all elements are numbers)', () => {});
});

describe("clone(arr)", () => {
	it("should return a copy of the original array", () => {});
	it("should not modify the original array", () => {});
	it("changes to the copy should not effect the original array", () => {});
});

describe("replaceItemAtIndex(arr, i, num)", () => {
	it('return an array based on "arr" but with element "i" replaced with "num"', () => {});
	it("should not modify the original array", () => {});
});

describe("removeRegion(arr, i, j)", () => {
	it('return an array based on "arr" but with elements from "i" to "j" removed (including "j")', () => {});
	it("should not modify the original array", () => {});
});

describe("merge(arr1, arr2)", () => {
	it('return an array containing all elements of "arr1" followed by all elements of "arr2"', () => {});
	it("should not modify the original arrays", () => {});
});
