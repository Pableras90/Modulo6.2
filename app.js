var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "pableras"



//Funcion para coger cada letra del array y devolver su posicion en el indice

var searchString = (array, value) => {   //De este array me busque esta letra
    for (var i = 0; i < array.length; i++) { //Recorre el array una por una
        if (array[i] === value) return i; //Me devuelve el indice en el que se encuentra la letra en el array(es decir, su posicion)
    }
    return -1;
};



//console.log(searchString(encryptedAlphabet, "m"))
var tranformLetter = (letter) => {
    var resultLetter = "";
    for (var i = 0; i < letter.length; i++) {
        var letterIndex = searchString(plainAlphabet, text[i]);
        if (letterIndex > -1) {
            resultLetter = resultLetter + encryptedAlphabet[letterIndex];
        } else {
            resultLetter = resultLetter + letter[i];
        }
    }

    return resultLetter;
}

console.log(tranformLetter(text));

/*var searchEncrypted = (message) => {
    var messageLowerCase = message.toLowerCase();
    var resultMessage = "";

    for (var index = 0; index < message.length; index++) {   //Iteras por las letras del mensaje
        resultMessage = result + tranformLetter(letter); //Devuelve el valor(posicion en el array) del mensaje(text) en el alfabeto plainAlphabet
    }

};

searchEncrypted(text);*/











