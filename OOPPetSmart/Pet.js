function Pet(type,name,age=1,owner){
    this.type = type
    this.name = name
    this.age = age
    this.owner = owner.name
    this.voice = function(){
        if(this.type == 'dog'){
            return 'woof'
        } else if(this.type == 'cat'){
            return 'meooow'
        }else {
            return `I dont know who am I!`
        }
    }
    this.info = function(){
        return ` <b>=================================</b>
                       <h1> "Description" </h1> 
                       <pre>
                        <ul>
                        <li>Name: ${this.name}</li>
                        <li>Type: ${this.type}</li>
                        <li>Age : ${this.age}</li>
                        <li>Owner: ${this.owner}</li>
                        </ul>
                        </pre>

                    <b>=================================</b>`
    }
}


module.exports = Pet