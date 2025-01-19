class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom; // nom
        this.pointsDeVie = pointsDeVie; // point de vie restant
        this.attaque = attaque; //les dégâts infligés en cas d'attaque
        this.precision = precision; //probabilité que l'attaque touche
    }

    verifierPrecision() {
        let chance = Math.random();  //Génère une valeur aléatoire (avec Math.random()) entre 0 et 1.
        return chance <= this.precision; //Retourne true si cette valeur est inférieure ou égale à la  precision
    }

    attaquer(cible) {
        if (this.verifierPrecision()) {   //Si l'attaque est réussie (verifierPrecision retourne true), elle réduit les points de vie de la cible.
            cible.pointsDeVie -= this.attaque;
            console.log(`🎯 ${this.nom} touche ${cible.nom} et lui inflige ${this.attaque} points de dégâts!`);
            console.log(`💖 ${cible.nom} a maintenant ${cible.pointsDeVie} points de vie.`);
            return true;
        } else {
            console.log(`❌ ${this.nom} rate son attaque contre ${cible.nom}!`);
            return false;
        }
    }

    estVivant() {
        return this.pointsDeVie > 0;
    }
}

// Création des combattants
let hero = new Combattant("hero", 100, 20, 0.8);
let adversaire = new Combattant("adversaire", 80, 25, 0.7);

// Fonction pour afficher l'état des combattants
function afficherEtat(hero, adversaire) {     //La fonction (afficherEtat) montre les points de vie des deux combattants après chaque tour.
    console.log("\n=== État du combat ===");
    console.log(`${hero.nom}: ${hero.pointsDeVie} PV`);
    console.log(`${adversaire.nom}: ${adversaire.pointsDeVie} PV`);
    console.log("==================\n");
}

// Simulation du combat
console.log("🏆 DÉBUT DU COMBAT! 🏆");
afficherEtat(hero, adversaire);

let tour = 1;
while (hero.estVivant() && adversaire.estVivant()) {
    console.log(`\n🔄 TOUR ${tour}`);
    
    // Tour du combattant 1
    hero.attaquer(adversaire);
    if (!adversaire.estVivant()) break;
    
    // Tour du combattant 2
    adversaire.attaquer(hero);
    
    afficherEtat(hero, adversaire);
    tour++;
}

// Vainqueur
console.log("\n🎊 FIN DU COMBAT! 🎊");
if (hero.estVivant()) {
    console.log(`🏆 ${hero.nom} est victorieux!`);
} else {
    console.log(`🏆 ${adversaire.nom} est victorieux!`);
}
