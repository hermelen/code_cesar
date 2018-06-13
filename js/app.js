var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var shift = 3;
// var text = window.prompt("tapper votre texte");
var text = "alexia";

var result = "";
if (text != null) {
  for (var i = 0; i < text.length; i++) {
    letterIndex = alpha.indexOf(text[i]);
    result += alpha[letterIndex+shift];
  }
}

console.log(text);
console.log(result);
