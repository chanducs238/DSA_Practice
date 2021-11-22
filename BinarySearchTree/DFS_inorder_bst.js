class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val === current.value) return undefined;
            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(val > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        }
    }

    dfsInOrder(){
       let data=[];
       function traverse(node){
           node.left && traverse(node.left);
           data.push(node.value);
           node.right && traverse(node.right);
       }
        traverse(this.root);
        return data;
    }
}

b = new BinarySearchTree();
b.insert(10);
b.insert(6);
b.insert(15);
b.insert(3);
b.insert(8);
b.insert(20);
b.insert(11);
b.dfsInOrder();