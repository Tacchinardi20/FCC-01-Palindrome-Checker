function palindrome(str) {
  let thaiString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = thaiString.split("").reverse().join("");
console.log(thaiString, reversedString);

  if (thaiString != reversedString) {
    return false;
  }
  return true;
}

/*Or (Line 6-9)
  return (thaiString != reversedString) ? false : true;*/

let result = palindrome("A man, a plan, a canal. Panama");
console.log(result);