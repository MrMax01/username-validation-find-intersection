// Codeland Username Validation
/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

/*Another solution */
function CodelandUsernameValidation(str) {
  // code goes here
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*[a-zA-Z0-9]$/g;
  return str.length >= 4 && str.length <= 25 && regex.test(str);
}

// Find Intersection
/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function FindIntersection(strArr) {
  // code goes here
  let result = [];
  if (strArr.length === 2) {
    let arrNum1 = strArr[0].split(", ");
    let arrNum2 = strArr[1].split(", ");
    // console.log(arrNum1);
    for (let i = 0; i < arrNum1.length; i++) {
      if (arrNum2.includes(arrNum1[i])) {
        result.push(arrNum1[i]);
      }
    }
  }
  return result ? result : false;
}
