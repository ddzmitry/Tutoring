// tree has a structure of root and children binary tree on legt has only
// children that less or equal to the root of the tree to the right it stores
// the values that bigger or equal to the root of the tree Each element in tree
// is represented as a node
var fs = require('fs')
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;

    }
}
// Binary search tree BST

class BST {
    constructor() {
        this.root = null;
    }

    // add method
    add(data) {
        // if tree is enpty we set root as a new node
        const node = this.root;
        if (node == null) {
            this.root = new Node(data);

            return;
        } else {
            /*that means this is not root level we need to set up
            a reqursion funciton that
            1) Will check the value is bigerr or less then root less goes to left / nore goes to right
            2) and we need to continure to check untill we fund where there is empty spot to add our data
            */
            const searchTree = function (node) {

                if (data < node.data) {
                    // check if less
                    if (node.left === null) {
                        // so if we find a spot we assign data as new Node to it
                        node.left = new Node(data)
                        return;
                    } else if (node.left !== null) {
                        // if there is data we have to run function on this node to dive deep
                        return searchTree(node.left)

                    }

                } else if (data > node.data) {
                    //  so if value is bigger then root we will go of the right side
                    if (node.right === null) {
                        // same if there is no right node we will assign it to null value
                        node.right = new Node(data);
                        return;

                    } else if (node.right !== null) {
                        // if it is not empty we have to run function to search on this node
                        return searchTree(node.right)
                    }
                } else {
                    return null;
                }

            }

            return searchTree(node)

        }
    }

    // find minValue
    findMin() {
        let current = this.root
        // left stores smaller
        while (current.left !== null) {
            current = current.left;

        }
        return current.data
    }

    // find max
    findMax() {
        let current = this.root
        // right stores larger
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }
    // id present
    /**
     We will check if data less or more then root
     if it is then we will move based of the children
     */

    isPresent(data) {
        let current = this.root;

        while (current) {
            if (data === current.data) {
                return true
            }
            if (current.data < data) {
                //
                current = current.left
            } else {
                current = current.right
            }
        }
        // if there is no data found
        return false
    }

    remove(data) {

        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            // if we got a match
            if (data == node.data) {
                // we need to check if there is any children on parent

                if (node.left == null) {
                    // if there is no left children we don't have to worry just return right
                    return node.right
                }
                if (node.right == null) {

                    return node.left
                }
                // but what if we have two children we have to go all the way down and find the
                // smallest value of the child and replace it on top level

                var tempNode = node.right
                while (tempNode.left !== null) {

                    tempNode = testTree.left;
                }

                node.data = tempNode.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;

            } else if (data < node.data) {
                // we have to run recursevly
                node.left = removeNode(node.left, data)
                return node;

            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data)
    }

    isBalanced(){
        return (this.findMinHight() >= this.findMaxHight() -1 )
    }
    findMinHight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHight(node.left)

        let right = this.findMinHight(node.right)

        
        if(left < right){
            return left + 1
        } else {
            return right + 1
        }
        

    }
    findMaxHight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMaxHight(node.left)
        // console.log(left)
        let right = this.findMaxHight(node.right)
        // console.log(right)
        
        if(left > right){
            return left + 1
        } else {
            return right + 1
        }
    }

    inOrder(){
        if(this.root == null){
            return null;
        } else{
            var result = new Array();

            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data)
                node.right && traverseInOrder(node.right);


            }
            traverseInOrder(this.root);
            return result;     

        }

    }

    preOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traversePreOrder(node) {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
          };
          traversePreOrder(this.root);
          return result;
        };
      }
      postOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
          };
          traversePostOrder(this.root);
          return result;
        }
      }
      levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
      

}

let testTree = new BST;
console.log(testTree)
testTree.add(50)
testTree.add(30)
testTree.add(3)
testTree.add(33)
testTree.add(60)
testTree.add(50)
testTree.add(30)
testTree.add(10)
testTree.add(60)
testTree.add(5)
testTree.add(4)
testTree.add(99)



console.log(testTree.remove())

console.log(testTree.findMin())
console.log(testTree.findMax())
console.log(testTree.isPresent(10))
console.log(testTree.isPresent(50))
console.log(testTree.findMinHight())
console.log(testTree.findMaxHight())
console.log(testTree.inOrder())
console.log(testTree.postOrder())
console.log(testTree.preOrder())
console.log(testTree.levelOrder())





// this is amazing 
// fs.writeFile('hellow.json',JSON.stringify(testTree))