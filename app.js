var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "pableras"
var encrypt = "sqw'rfqg"


//Funcion para coger cada letra del array y devolver su posicion en el indice

var searchString = (array, value) => {   //De este array me busque esta letra
    for (var i = 0; i < array.length; i++) { //Recorre el array una por una
        if (array[i] === value) return i; //Me devuelve el indice en el que se encuentra la letra en el array(es decir, su posicion)
    }
    return -1;
};



//console.log(searchString(encryptedAlphabet, "m"))
var encryptLetter = (letter) => {
    var letterLow = letter.toLowerCase();
    var resultLetter = "";
    for (var i = 0; i < letterLow.length; i++) {
        var letterIndex = searchString(plainAlphabet, text[i]);
        if (letterIndex > -1) {
            resultLetter = resultLetter + encryptedAlphabet[letterIndex];
        } else {
            resultLetter = resultLetter + letter[i];
        }
    }

    return resultLetter;
}

console.log(encryptLetter(text));


var desencryptLetter = (letter) => {
    var letterLow = letter.toLowerCase();
    var resultLetter = "";
    for (var i = 0; i < letterLow.length; i++) {
        var letterIndex = searchString(encryptedAlphabet, encrypt[i]);
        if (letterIndex > -1) {
            resultLetter = resultLetter + plainAlphabet[letterIndex];
        } else {
            resultLetter = resultLetter + letter[i];
        }
    }

    return resultLetter;
}

console.log(desencryptLetter(encrypt));


var textEncrypted = document.getElementById('Cuadro1').innerHTML;

var textTraduction = document.getElementById("encrypt").addEventListener("click", () => encryptLetter(textEncrypted));

console.log(textEncrypted);


document.getElementById('Cuadro2').addEventListener("click", textTraduction);









