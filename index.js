class AttackSkill {
    constructor(nameVonAttack, höheVonSchaden, mengeVonMagie) {
        this.nameVonAttack = nameVonAttack,
            this.höheVonSchaden = höheVonSchaden,
            this.mengeVonMagie = mengeVonMagie
    }
}

class Pokemon {
    constructor(name, gesundheit, magie, faehigkeiten = []) {
            this.name = name,
            this.gesundheit = gesundheit,
            this.magie = magie,
            this.faehigkeiten = faehigkeiten
    }
    learnAttackSkill(attackObj) {
        if (this.gesundheit < 0) {
            return `${this.name} muss wiederbelebt werden`
        }

        this.faehigkeiten.push(attackObj);
        return `${this.name} hat die Fähigkeit ${attackObj.nameVonAttack} erfolgreich eingesetzt!`
    }

    showStatus() {
        return `${this.name} Status 
                \n Gesundheit: ${this.gesundheit}
                \n Magie: ${this.magie}`
    }
    attack(index, pokemon) {
        let attack = Object.values(this.faehigkeiten[index]);
        if (this.gesundheit < 0) {
            return `${this.name} ist tot`
        } else if (attack[2] > this.magie) {
            return `nicht genug Magie, kann keinen Angriff starten!`
        } else {
            this.magie = this.magie - attack[2];
            pokemon.gesundheit = pokemon.gesundheit - attack[1];
            if (pokemon.gesundheit < 0) {
                return `${this.name} hat die Fähigkeit '${attack[0]}' erfolgreich eingesetzt! 
                    \n ${pokemon.name} hat ${attack[1]} Schaden.
                    \n ${pokemon.name} ist verlieren ${this.name} gewonnen!`
            }
            return `${this.name} hat die Fähigkeit '${attack[0]}' erfolgreich eingesetzt! 
                    \n ${pokemon.name} hat ${attack[1]} Schaden.`
        }
    }
    getMagic(num) {

        this.magic += num
        return `${this.name} hat ${num} Magie zurückbekommen.`

    }
    toHeal(num) {
        this.health += num
        return `${this.name} hat ${num} Gesundheit zurückbekommen.`
    }
}

let pikachu = new Pokemon(`Pikachu`, 120, 80);
let bulbasaur = new Pokemon(`Bulbasaur`, 95, 105);

let blitz = new AttackSkill(`blitz`, 40, 30);
let giftSamen = new AttackSkill('gift samen', 20, 20);

console.log(pikachu.learnAttackSkill(blitz));
console.log(bulbasaur.learnAttackSkill(giftSamen));

console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.getMagic(20));
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.attack(0, pikachu));
console.log(bulbasaur.toHeal(20));