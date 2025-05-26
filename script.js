let sentence = "Learning JavaScript can significantly improve your development skills";

let words = sentence.split(" ");
let longestWord = "";
let maxLength = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].length > maxLength) {
    maxLength = words[i].length;
    longestWord = words[i];
  }
}

console.log("Sentence:", sentence);
console.log("Longest Word:", longestWord);
console.log("Length:", maxLength);
