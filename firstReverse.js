function FirstReverse(str) {

  let string = str;
  let answer = "";

  for (var index = string.length - 1; index >= 0; index--) {
    answer += string[index];
  }

  return answer;

}

// keep this function call here
console.log(FirstReverse(readline()));
