class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }

    verifierPrecision() {
        let chance = Math.random();
        return chance <= this.precision;
    }

    attaquer(cible) {
        if (this.verifierPrecision()) {
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
function afficherEtat(hero, adversaire) {
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
