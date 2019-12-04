$(document).ready(createPhoneNumber([5,6,2,8,3,3,9,6,7,4]));

function createPhoneNumber(test) {
  var part1 = "";
  var part2 = "";
  var part3 = "";


  for (var index = 0; index < test.length; index++) {
    if (index == 0 || index == 1 || index == 2) {
      part1 += test[index];
    } else if (index == 3 || index == 4 || index == 5) {
      part2 += test[index];
    } else if (index == 6 || index == 7 || index == 8 || index == 9) {
      part3 += test[index];
    }
  }

  console.log("part1 is: ", part1);
  console.log("part2 is: ", part2);
  console.log("part3 is: ", part3);

  var answer = "(" + part1 + ") " + part2 + "-" + part3;
  console.log("number is: ", answer)

}
