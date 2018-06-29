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

    }
}
class Flying extends Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence){
        super(name, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){
        
    }
    defend(){

    }
}
class Fighter extends Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence){
        super(name, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){

    }
    defend(){

    }
}
class Rogue extends Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence){
        super(name, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){

    }
    defend(){

    }
}
class Shaman extends Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence){
        super(name, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){
  
    }
    defend(){
  
    }
}
class Wizard extends Monster{
    constructor(name, health, speed, strength, agility, wisdom, intelligence){
        super(name, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){
  
    }
    defend(){
  
    }
}
