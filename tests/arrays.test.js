const rewire = require("rewire");
// const lib = rewire("../solutions/arrays.js");
const lib = rewire("../arrays.js");

let words;
let nums;
let nums2;
let empty;

beforeEach(() => {
	words = ["gondor", "lothlorian", "hobbiton", "minas morgul", "orthanc"];
	nums = [4, 2, -1, 10, 8, 12];
	nums2 = [0, 15, 0, -15, 1];
	empty = [];
});

describe("getLength(arr)", () => {
	let getLength;
	beforeAll(() => {
		getLength = lib.__get__("getLength");
	});
	it('should return the length of "arr"', () => {
		expect(getLength(words)).toEqual(words.length);
		expect(getLength(nums)).toEqual(nums.length);
		expect(getLength(empty)).toEqual(empty.length);
	});
});

describe("isEmpty(arr)", () => {
	let isEmpty;
	beforeAll(() => {
		isEmpty = lib.__get__("isEmpty");
	});
	it('should return true or false if "arr" is empty', () => {
		expect(isEmpty(words)).toBe(false);
		expect(isEmpty(nums)).toBe(false);
		expect(isEmpty(empty)).toBe(true);
	});
});

describe("getItemAtIndex(arr, i)", () => {
	let getItemAtIndex;
	beforeAll(() => {
		getItemAtIndex = lib.__get__("getItemAtIndex");
	});
	it('should return the element of "arr" at index "i"', () => {
		expect(getItemAtIndex(words, 2)).toEqual(words[2]);
		expect(getItemAtIndex(nums, 4)).toEqual(nums[4]);
	});
});

describe("containsItem(arr, item)", () => {
	let containsItem;
	beforeAll(() => {
		containsItem = lib.__get__("containsItem");
	});
	it('should return true or false if "arr" contains "item"', () => {
		expect(containsItem(words, "gondor")).toBe(true);
		expect(containsItem(words, "osgiliath")).toBe(false);
		expect(containsItem(nums, 8)).toBe(true);
		expect(containsItem(nums, 999)).toBe(false);
	});
});

describe("addToArray(arr, item)", () => {
	let addToArray;
	beforeAll(() => {
		addToArray = lib.__get__("addToArray");
	});
	it("should append 'item' to 'arr' and return 'arr'", () => {
		let wordsResult = [...words, "bree"];
		let numResult = [...nums, -14];

		expect(addToArray(words, "bree")).toEqual(wordsResult);
		expect(addToArray(nums, -14)).toEqual(numResult);
		expect(addToArray(empty, "beans")).toEqual(["beans"]);
	});
});

describe("sum(arr)", () => {
	let sum;
	beforeAll(() => {
		sum = lib.__get__("sum");
	});
	it('should return the sum of all elements in "arr" (assume all elements are numbers)', () => {
		expect(sum(nums)).toEqual(35);
		expect(sum(nums2)).toEqual(1);
		expect(sum(empty)).toEqual(0);
	});
});

describe("clone(arr)", () => {
	let clone;
	let copy;
	beforeAll(() => {
		clone = lib.__get__("clone");
	});
	it("should return a copy of the original array", () => {
		copy = clone(words);
		expect(copy.length).toEqual(words.length);
		for (let i = 0; i < words.length; i++) {
			expect(copy[i]).toEqual(words[i]);
		}
	});
	it("should not modify the original array", () => {
		expect(words).toEqual([
			"gondor",
			"lothlorian",
			"hobbiton",
			"minas morgul",
			"orthanc",
		]);
	});
	it("changes to the copy should not effect the original array", () => {
		copy = clone(words);
		copy[3] = "minas tirith";
		expect(words[3]).toEqual("minas morgul");
	});
});

describe("replaceItemAtIndex(arr, i, item)", () => {
	let replaceItemAtIndex;
	beforeAll(() => {
		replaceItemAtIndex = lib.__get__("replaceItemAtIndex");
	});
	it('return an array based on "arr" but with element "i" replaced with "item"', () => {
		result = [...words];
		result.splice(3, 1, "minas tirith");
		expect(replaceItemAtIndex(words, 3, "minas tirith")).toEqual(result);
	});
	it("should not modify the original array", () => {
		replaceItemAtIndex(words, 3, "minas tirith");
		expect(words).toEqual([
			"gondor",
			"lothlorian",
			"hobbiton",
			"minas morgul",
			"orthanc",
		]);
	});
});

describe("removeRegion(arr, i, j)", () => {
	let removeRegion;
	beforeAll(() => {
		removeRegion = lib.__get__("removeRegion");
	});
	it('return an array based on "arr" but with elements from "i" to "j" removed (including "j")', () => {
		let result1 = [...words];
		let result2 = [...words];
		result1.splice(4, 1);
		result2.splice(1, 3);
		expect(removeRegion(words, 4, 4)).toEqual(result1);
		expect(removeRegion(words, 1, 3)).toEqual(result2);
	});
	it("should not modify the original array", () => {
		removeRegion(words, 4, 4);
		expect(words).toEqual([
			"gondor",
			"lothlorian",
			"hobbiton",
			"minas morgul",
			"orthanc",
		]);
	});
});

describe("merge(arr1, arr2)", () => {
	let merge;
	beforeAll(() => {
		merge = lib.__get__("merge");
	});
	it('return an array containing all elements of "arr1" followed by all elements of "arr2"', () => {
		expect(merge(words, nums)).toEqual([...words, ...nums]);
	});
	it("should not modify the original arrays", () => {
		merge(words, nums);
		expect(words).toEqual([
			"gondor",
			"lothlorian",
			"hobbiton",
			"minas morgul",
			"orthanc",
		]);
		expect(nums).toEqual([4, 2, -1, 10, 8, 12]);
	});
});
