function SimpleAdding(num) {

  var number = num;
  var answer = 0;

  console.log("number is: ", number);

  for (var outer = 1; outer <= number; outer++) {
    answer += outer;
  }

  console.log("answer is: ", answer)


}

// keep this function call here
console.log(SimpleAdding(readline()));

/*

Simple Adding
Have the function SimpleAdding(num) add up all the numbers from 1 to num.
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
For the test cases, the parameter num will be any number from 1 to 1000.

Examples
Input: 12
Output: 78

*/
