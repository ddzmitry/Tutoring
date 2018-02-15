

var hero = function(name,health,attack){
        this.name = name
        this.health = health
        this.attack = attack
        this.totals = function() {
            return  `
            The character name is ${this.name}
            ======= health : ${this.health} =====
            ==========Attack: ${this.attack} =====
            `
        },
        this.hit = function(){
            this.attack += 5
        },
        this.fight =  function(enemy){
            // some logic will happened here
            enemy.hit()
            this.hit()

            enemy.health -= this.attack
            this.health -= enemy.attack
            
            if(enemy.health  <= 0 || this.health <= 0){
                console.log(enemy.attack)
                console.log(this.attack)
                console.log(enemy.health)
                console.log(this.health)
                console.log('Battle over')
            }else{
                enemy.fight(this)
            }

        }
 
        
}

var Edgar = new hero("Edgar",500,50)
var Dzmitry = new hero("Dzmitry",800,25)

console.log(Edgar.totals())
console.log(Dzmitry.totals())

Edgar.fight(Dzmitry)
