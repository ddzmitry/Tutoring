
// [10] -> [20] -> [30] -> null
//  isEmpty , getSize , prepend , append,
// remove by index / by value
// contains (value)
// print 

// since JS => functions are scopeless we CAN'T use them!

function linkedlist(){
    // All linked list has in the beginning is empty node
    this.head = null;

}

// this fuynction will check if list is empty 
linkedlist.prototype.isEmpty = function(){return this.head == null};

linkedlist.prototype.size = function(){
    var current = this.head
    var count = 0
    // we check iof this.head is not a null
    while (current !== null){
        count ++
        current = current.next;
    }

    return count
}
// add at the beginning 
//  this.head -> 10
linkedlist.prototype.prepend = function(val){
    // 1) Create a new Node(val)
    // 2) assign new Node to curent head
    // Make the new node point to current head
    // Update this.head to point to the new node
    console.log(val)
    var newNode = {
        data : val,
        next: this.head
    } 

    this.head = newNode
}

linkedlist.prototype.append = function(val){

    var newNode = {
        data : val,
        next: null
    }

    var current = this.head
    // we need to create a node 
    //  Treverse to the end of the list 
    // Make the last node.next = newNode

    // So we can check if it is empty 
    // if so then the head is going to be a newNode
    if(this.isEmpty()){
        this.head = newNode;
        return;
    }
    //  now we will all way to the end figuring out where the last element of
    // the linked list which has to have value of null
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode
}
linkedlist.prototype.contains = function name(val) {

    if(this.isEmpty()){
        return false
    }
    var current = this.head
    // make sure this is not an end
    while(current != null){
        // check if it is there 
        if(current.data == val){
            return true
        }else{
            // shif to next one
            current = current.next
        }

    }
    // if didn't find it return false
    return false

    
}

linkedlist.prototype.remove = function(val){
    // if vallue is not here
        if(!this.contains(val)){
            return false
        }

        // for first node 
        if(this.head.data == val){
            this.head = this.head.next;
            return;
        }
    
    // we have current
    var current = this.head
    var prev =  null

    // We have to shift...
        /*
          [10] -> [20] -> [30] -> [60]-> [15]-> [45]-> null
 prev -> current
          [10] -> [20] -> [30] -> [60]-> [15]-> [45]-> null
          prev -> current  
           [10] ->  [20] -> [30] -> [60]-> [15]-> [45]-> null
                    prev -> current              
        */ 
    while(current.data !== val){
        // create temp to store current
        // and switch it here 
        var temp = current
        current = current.next
        prev = temp
        // console.log(current)
        // console.log(prev)

    }
    // console.log(val)
    // console.log(current)
    prev.next = current.next
    return;

}
linkedlist.prototype.print = function(){
    var output = '[';
    var current = this.head;
        console.log(current)
    while(current != null){
        output += current.data.toString()
        if(current.next != null){
            output += ' , '
        }
        current = current.next
    }
    output += ']'
    return output
}
var list = new linkedlist()
list
list.append(10)
list
list.prepend(20)
list
list.append(30)
console.log(list.contains(33))
console.log(list.contains(30))
list.remove(10)
console.log(list)
list.remove(20)
list
list.remove(30)
list
list.append(45)
list.append('Foo')
list.append('bar')
list.append('bar')
list.prepend(20)
list.append(20)
console.log(list.print())



