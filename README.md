# Data Structures Assignment - CS20 Module 1

## Task
You have 3 files to edit:
- `arrays.js`
- `objects.js`
- `arrays-of-objects.js`
  
These have corresponding test files that specify several functions to create in each file.

Once you've used `git clone` to copy this repo to your computer, and opened this folder in VSCode (**not the folder that contains this folder!**), run `npm install` to automatically install the testing libraries.

Either run the tests in the terminal with `npm run test`, or use the "Testing" sidebar (you may need to reload VSCode after `npm install` is finished).

>If you want to see the results of `console.log()` to debug your code, you have to run the tests using `npm run test`, the "Testing" sidebar tab doesn't support console messages.

For each test, write a function with the exact same signature as specified in the test.

>The "signature" of a function refers to its name, the number of arguments, and the order of the arguments

For example, `arrays.test.js` specifies a test for `containsItem(arr, item)`, so your `arrays.js` file should contain:
```js
function containsItem(arr,item){
    //your code here

    //return something if necessary
}
```

The test also specifies what each function should do and if it should "return" anything. For example, the test for `containsItem(arr,item)` ask you to *return true or false if "arr" contains "item"*

>You can assume that the tests will always pass in valid arguments, so you shouldn't need to validate them. For example, a function that needs to add elements of an array together will only be tested with arrays of numbers.

Be careful and mindful of whether or not the tests are expecting you to modify the original array or to return a new array.

## Saving, Committing, and Submitting

Don't forget to commit your changes to git:
```bash
git add .
git commit -m "commit message here"
```
And then push your commit(s) to GitHub at the end of each work session:
```bash
git push
```

## Notes
Many of these tests can be passed with functions that just contain a single line of code. This assignment is not meant as an exercise in best-practices, since in a real project you would just use that one-liner rather than wrapping it in a function.

This assignment is meant to get you practicing handling and manipulating arrays and objects, using some of the built-in functions attached to these data types, and practicing more with functions, arguments, and return values.


