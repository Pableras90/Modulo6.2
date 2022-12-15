var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";



var searchString = (array, value) => {   
    var index = array.indexOf(value);
    return index;
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