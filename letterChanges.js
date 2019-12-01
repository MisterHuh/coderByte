/* attempt #2 */
function LetterChanges(str) {

  var answer = "";

  for (var index = 0; index < str.length; index++) {
    var currentIndex = str.charCodeAt(index);

    if (currentIndex === 57) {
      currentIndex = 48;
    } else if (currentIndex === 90) {
      currentIndex = 65;
    } else if (currentIndex === 122) {
      currentIndex = 97;
    } else if (currentIndex >= 48 || currentIndex <= 56 || currentIndex >= 65 || currentIndex <= 89 || currentIndex >= 97 || currentIndex <= 121) {
      currentIndex += 1;
    }


    // if (currentIndex === 97) {
    //   currentIndex = 65;
    // } else if (currentIndex === 101) {
    //   currentIndex = 69;
    // } else if (currentIndex === 105) {
    //   currentIndex = 74;
    // } else if (currentIndex === 111) {
    //   currentIndex = 79;
    // } else if (currentIndex === 117) {
    //   currentIndex = 85;
    // }

    answer += String.fromCharCode(currentIndex)

  }

  return answer;

}

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
