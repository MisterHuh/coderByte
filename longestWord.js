

/* attempt #2 */
function LongestWord(sen) {

  var sen = sen;
  var senTrimmed = sen.split(" ");
  console.log("sentrimmed is: ", senTrimmed);

  var answerArray = [];
  var lengthArray = [];

  for (var index = 0; index < senTrimmed.length; index++) {
    var eachObj = {
      word: senTrimmed[index],
      length: senTrimmed[index].length
    };
    answerArray.push(eachObj);
    lengthArray.push(senTrimmed[index].length);
    console.log("eachObj is: ", eachObj)
  }

  console.log("answerArray is: ", answerArray)
  console.log("lengthArray is: ", lengthArray);

  var answer = Math.max.apply(Math, lengthArray);
  console.log("answer is: ", answer);

  for (answerIndex = 0; answerIndex < answerArray.length; answerIndex++) {
    if (answer == answerArray[answerIndex]["length"]) {
      console.log("the final answer is: ", answerArray[answerIndex]["word"])
      return;
    }
  }

}

/* attempt #1 */
/* dont work */
function LongestWord(sen) {
  var strings = sen.split(" ");
  console.log("strings is: ", strings);

  var answerArray = [];
  stringsLength = [];
  var answer = null;
  var answreIndex = null;

  for (var index = 0; index < strings.length; index++) {
    var testObj = {
      word: strings[index],
      length: strings[index].length
    }
    answerArray.push(testObj);
    stringsLength.push(strings[index].length);

    if (index === strings.length - 1) {
      answer = Math.max.apply(Math, stringsLength);
      for (var testIndex = 0; testIndex < strings.length; testIndex++) {
        if (answer == stringsLength[index]) {
          console.log("the final answer is: ", answerArray[index]["word"]);
        }
      }
    }
  }

  console.log("stringsLength; is: ", stringsLength);
  console.log("answerArray; is: ", answerArray);
  console.log("answer is: ", answer);
  console.log("answerArray[2]'name']", answerArray[2]['name'])
}


/*

Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.

Examples
Input: "fun time"
Output: time

*/
