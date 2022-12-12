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


function encryptLetter(letter) {
    var letterLow = letter.toLowerCase();
    var resultLetter = "";
    for (var i = 0; i < letterLow.length; i++) {
        var letterIndex = searchString(plainAlphabet, letterLow[i]);
        if (letterIndex > -1) {
            resultLetter = resultLetter + encryptedAlphabet[letterIndex];
        } else {
            resultLetter = resultLetter + letter[i];
        }
    }
    return resultLetter;
}

function desencryptLetter(letter) {
    var letterLow = letter.toLowerCase();
    var resultLetter = "";
    for (var i = 0; i < letterLow.length; i++) {
        var letterIndex = searchString(encryptedAlphabet, letterLow[i]);
        if (letterIndex > -1) {
            resultLetter = resultLetter + plainAlphabet[letterIndex];
        } else {
            resultLetter = resultLetter + letter[i];
        }
    }

    return resultLetter;
}

document.getElementById("encrypt").addEventListener("click", () => {
    var encrypted = encryptLetter(document.getElementById('Cuadro1').value);
    document.getElementById('Cuadro2').value = encrypted;
});

document.getElementById("desencrypt").addEventListener("click", () => {
    var desencrypted = desencryptLetter(document.getElementById('Cuadro2').value);
    document.getElementById('Cuadro1').value = desencrypted;
});


//Texto traducido
//¡lo has conseguido! puedes vacilar a tus compañeros escribiendo por el chat: '¡soy la leche, turing fliparia conmigo!' y a continuacion envia un mensaje cifrado, ¡el que tu quieras!



//Opcional




//Generador aleatorio

const eliminaDuplicados = (arr) => {
    return arr.filter((valor, indice) => {
        return arr.indexOf(valor) === indice;
    });
}




function randomPick(n, min, max) {
    var array = [];
    var range = max - min + 1;
    for (var i = 0; i < n; i++) {
        for (var j = 1; i < n; i++)
        array[i] = Math.floor(Math.random() * range) + min;
            if (array[i] == array[j]) {
                eliminaDuplicados(array[i])
            }
    }
    return array;
};



console.log(randomPick(10, 50, 60));

