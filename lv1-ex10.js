
let n = parseInt(prompt("Entrez le nombre de termes de la suite de Fibonacci à afficher :"));

if (isNaN(n) || n <= 0) {
    console.log("Veuillez entrer un nombre valide et positif.");
} else {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    console.log("Les premiers " + n + " termes de la suite de Fibonacci sont :");
    console.log(fibo.slice(0, n).join(", "));
}