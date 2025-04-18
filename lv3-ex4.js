function static(personnes) {
    let statistiques = {
      ageMoyen: 0,
      nombreParProfession: {},
    };
    
    let totalAge = 0;
    
    for (let personne of personnes) {
      totalAge += personne.age;
      
      if (statistiques.nombreParProfession[personne.profession]) {
        statistiques.nombreParProfession[personne.profession]++;
      } else {
        statistiques.nombreParProfession[personne.profession] = 1;
      }
    }
    
    if (personnes.length > 0) {
      statistiques.ageMoyen = totalAge / personnes.length;
    }
    
    return statistiques;
  }
  
  let personnes = [
    { nom: "Alice", age: 30, profession: "Développeur" },
    { nom: "Bob", age: 25, profession: "Designer" },
    { nom: "Franck", age: 35, profession: "Développeur" },
    { nom: "Bouchra", age: 40, profession: "Designer" },
  ];
  
  let result = static(personnes);
  console.log(result);