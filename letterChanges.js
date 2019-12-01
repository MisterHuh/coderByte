/* attempt #2 */
function LetterChanges(str) {

  // var str = "";

  var answer = "";

  for (var index = 0; index < str.length; index++) {
    var currentIndex = str.charCodeAt(index);
    // console.log("current string is: ", str[index])
    // console.log("current index is: ", currentIndex);

    if (currentIndex === 57) {
      currentIndex = 48;
      answer += String.fromCharCode(currentIndex)
      // answer += currentIndex;
    }
  }
  // code goes here
  // return str;
  return answer;

}

// keep this function call here
console.log(LetterChanges(readline()));


/* attempt #1 */
function LetterChanges(str) {

  var string = str;
  var array = [];

  for (var index = 0; index < string.length; index++) {

    var charCode = 0;
    var newCharCode = 0;

    if (string[index] === "z") {
      array.push("a");
    } else if (string[index] == 9) {
      array.push(0);
    } else if (string[index] >= 48 && string[index] <= 56) {
      charCode = string[index].charCodeAt(0);
      newCharCode = charCode + 1;
      array.push(newCharCode);
    }
  }

  console.log("array is: ", array);
  // [ "2", "2", "a", "a", 0, 0, ! ]



}

// keep this function call here
console.log(LetterChanges(readline()));


/*

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

Examples
Input: "hello*3"
Output: Ifmmp*3

*/
