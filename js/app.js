var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var text = window.prompt("tapper votre texte");

if (text != null) {
  for (var i = 0; i < alpha.length; i++) {
    letterIndex = text.indexOf(alpha[i]);
if (letterIndex >=0 ){

    console.log(alpha[i]);
    console.log(letterIndex);
    console.log(i);
}
  }
}
