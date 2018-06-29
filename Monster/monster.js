class Monster{
    constructor(name, attack, health, speed, strength, agility, wisdom, intelligence){
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.agility = agility;
    this.wisdom = wisdom;
    this.intelligence = intelligence;
    }
}
class Flying extends Monster{
    constructor(name, attack, health, speed, strength, agility, wisdom, intelligence){
    super(name, attack, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){

    }
    defend(){

    }
}
class Fighter extends Monster{
    constructor(name, attack, health, speed, strength, agility, wisdom, intelligence){
    super(name, attack, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){

    }
    defend(){

    }
}
class Rogue extends Monster{
    constructor(name, attack, health, speed, strength, agility, wisdom, intelligence){
    super(name, attack, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){

    }
    defend(){

    }
}
class Wizard extends Monster{
    constructor(name, attack, health, speed, strength, agility, wisdom, intelligence){
      super(name, attack, health, speed, strength, agility, wisdom, intelligence);
    }
    attack(){
  
    }
    defend(){
  
    }
}