function Person(name, job, age, pets = []) {
    this.name = name
    this.job = job
    this.age = age
    this.pets = pets
    this.myPets = (databaseofpets=[]) => {
        return databaseofpets.filter(pet => pet.owner == this.name )
    }

}
module.exports = Person
