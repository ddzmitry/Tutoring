fs = require('fs')

const burgers = [
    {
        name: 'Tripple cheese Burger',
        devaured: true,
        paid: true
    }, {
        name: 'Fun Burger',
        devaured: false,
        paid: false
    }, {
        name: 'happy Burger',
        devaured: true,
        paid: false
    }, {
        name: 'Spwcial Burger',
        devaured: false,
        paid: true
    }
]

const pets = [
    {
        name: 'Fluff',
        type: 'Dog',
        owner: 'Edwin'
    }, {
        name: 'Rabbit',
        type: 'Cat',
        owner: 'Dzmitry'
    }, {
        name: 'Star',
        type: 'Cat',
        owner: 'Edwin'
    }, {
        name: 'Screamer',
        type: 'Parrot',
        owner: 'Edwin'
    }
]class orm {
    constructor() {}
    selectAll(db) {
        console.log(db)
        return db
    }
    selectFieldFromDatavbase(database, field) {
        let result = database.map((record) => {
            return record[field]
        })
        return result
    }
    selectDetailed(database, field, value) {
        value
        field
        database
        // "SELECT * from database.table where value(field) = value "
        let result = database.filter((record) => {
            if (record[field] == value) {
                return record
            }
        })
        return result
    }
    addrecord(database, record = {}) {
        // THIS IS FROM DATABASE HAS ALL FIELDS
        let updateRecord = Object
            .keys(database[0])
            .reduce((returning, key) => {

                if (!record[key]) {
                    returning[key] = false
                } else {
                    returning[key] = record[key]
                }

                return returning

            }, {})
        database.unshift(updateRecord)
        return updateRecord
    }
}

let ormBurgers = new orm()

console.log(ormBurgers.addrecord(burgers, {
    name: 'pbjBurger',
    devaured: false
}))
console.log(ormBurgers.addrecord(burgers, {name: 'Cheeseburger'}))
console.log(ormBurgers.addrecord(burgers, {name: 'SweetButger'}))

console.log(burgers)
// let html = ``
// ormBurgers.selectDetailed(pets,'owner','Dzmitry').forEach((record)=>{
// console.log(record)     html += `<h1>${record.owner}</h1>
// <h2>${record.name}</h2>             <pre>${record.type}</pre>` })
// fs.writeFile('records.html',html) console.log(ormBurgers.selectAll(burgers))
// console.log(ormBurgers.selectFieldFromDatavbase(burgers, 'name'))
// console.log(ormBurgers.selectFieldFromDatavbase(burgers, 'devaured'))
// console.log(ormBurgers.selectFieldFromDatavbase(burgers, 'paid'))
// console.log(ormBurgers.selectDetailed(burgers, 'devaured', true))
// console.log(ormBurgers.selectDetailed(burgers, 'paid', true))