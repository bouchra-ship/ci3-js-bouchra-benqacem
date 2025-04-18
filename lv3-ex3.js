ex3 
function nombresPremiers(nbr) {
    let nbrPremiers = [];

    for (let i = 2; i <= nbr; i++) {
        let premier = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                premier = false;
                break;
            }
        }

        if (estPremier) {
            nbrPremiers.push(i);
        }
    }

    return nbrPremiers;
}
