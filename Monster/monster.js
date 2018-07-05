class Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.agility = agility;
        this.wisdom = wisdom;
        this.intelligence = intelligence;
    }
    run(){
        if (getIntMinMax(1, 2) === 1){
            console.log('You ran!')
            return true;
        }
        else{
            console.log("You couldn't get away!")
            return false;
        }
    }
    giveExp(){
        return (this.speed + this.strength + this.agility + this.wisdom + this.intelligence) * (0.2*this.health);
    }
}
class Flying extends Monster{
    constructor(name){
        super(name,  getIntMinMax(50, 100),  getIntMinMax(5, 10),  getIntMinMax(1, 6),  getIntMinMax(2, 7),  getIntMinMax(1, 5),  getIntMinMax(3, 8));
    }
    attack(playerArmor){
        return (this.speed*3)-(playerArmor*2);
    }
    defend(){
        return this.strength*getIntMinMax(1, 4);
    }
}
class Fighter extends Monster{
    constructor(name){
        super(name,  getIntMinMax(85, 100),  getIntMinMax(2, 7),  getIntMinMax(5, 10),  getIntMinMax(1, 5),  getIntMinMax(1, 6),  getIntMinMax(3, 8));
    }
    attack(playerArmor){
        return (this.strength*3)-(playerArmor*2);
    }
    defend(){
        return this.wisdom*getIntMinMax(1, 4);
    }
}
class Rogue extends Monster{
    constructor(name){
        super(name,  getIntMinMax(60, 85),  getIntMinMax(1, 6),  getIntMinMax(3, 8),  getIntMinMax(5, 10),  getIntMinMax(1, 5),  getIntMinMax(2, 7));
    }
    attack(playerArmor){
        return (this.agility*3)-(playerArmor*2);
    }
    defend(){
        return this.speed*getIntMinMax(1, 4);
    }
}
class Shaman extends Monster{
    constructor(name){
        super(name,  getIntMinMax(50, 80),  getIntMinMax(1, 5),  getIntMinMax(2, 7),  getIntMinMax(3, 8),  getIntMinMax(5, 10),  getIntMinMax(1, 6));
    }
    attack(playerArmor){
        return (this.wisdom*3)-(playerArmor*2);
    }
    defend(){
        return this.intelligence*getIntMinMax(1, 4);
    }
}
class Wizard extends Monster{
    constructor(name){
        super(name,  getIntMinMax(50, 70),  getIntMinMax(3, 8),  getIntMinMax(1, 5),  getIntMinMax(1, 6),  getIntMinMax(2, 7),  getIntMinMax(5, 10));
    }
    attack(playerArmor){
        return (this.intelligence*3)-(playerArmor*2);
    }
    defend(){
        return this.agility*getIntMinMax(1, 4);
    }
}


class Player extends Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence, armor, mainStat){
        super(name, health, speed, strength, agility, wisdom, intelligence);
        this.armor = armor;
        this.mainStat = this.mainStat;
    }
    attack(mainStat){
        return (mainStat * getIntMinMax(1, 4 * 0.5));
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function getIntMinMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


