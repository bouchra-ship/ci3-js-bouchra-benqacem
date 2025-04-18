function binary(arr, cible) {
    let gauche = 0;
    let droite = arr.length - 1;

    while (gauche <= droite) {
        let milieu = Math.floor((gauche + droite) / 2);

        if (arr[milieu] === cible) {
            return milieu;
        }

        if (arr[milieu] < cible) {
            gauche = milieu + 1;
        } else {
            droite = milieu - 1;
        }
    }

    return -1;
}

let result = binary([1, 2, 3, 5, 7, 8, 10], 5);
console.log(result);