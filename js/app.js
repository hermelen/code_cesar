var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var shift = 300;
// var text = window.prompt("tapper votre texte");
var text = "alexia";

var result = "";
if (text != null) {
  for (var i = 0; i < text.length; i++) {
    letterIndex = alpha.indexOf(text[i]);
    index = letterIndex + shift;
    index %= 26;
    // if (letterIndex + shift >= 26) {
    //   index = letterIndex + shift - 26;
    //   console.log(index);
    // } else {
    //   index = letterIndex + shift;
    //   console.log(index);
    // }
    result += alpha[index];
  }
}

console.log(text);
console.log(result);
