
function trierLivresParTitre(livres) {
    return livres.sort((a, b) => {
        const titreA = a.titre.toLowerCase();
        const titreB = b.titre.toLowerCase();
        
        if (titreA < titreB) {
            return -1;
        }
        if (titreA > titreB) {
            return 1;
        }
        return 0;
    });
}
const bibliotheque = [
    { titre: "Zorro", auteur: "Isabel Allende", annee: 2005 },
    { titre: "1984", auteur: "George Orwell", annee: 1949 },
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 }
];

const livresTries = trierLivresParTitre(bibliotheque);
console.log(livresTries);