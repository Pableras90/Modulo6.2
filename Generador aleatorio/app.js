function randomPick(n, min, max) {
    var array = [];
    var range = max - min + 1;
    while (array.length != n) {
        var aleatorio = Math.floor(Math.random() * range) + min;
        if (!array.includes(aleatorio)) {
            array.push(aleatorio);
        }
    }
    return array;
};


console.log(randomPick(10, 50, 60));