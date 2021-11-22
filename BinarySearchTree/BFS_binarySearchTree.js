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

    find(val){
        if(this.root === null) return false;
        let current = this.root;
        while(current){
            if(val < current.value){
                current = current.left;
            } else if(val > current.value){
                current = current.right;
            } else {
            return true;
            }
        }
         return false;
    }

    bfs(){
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
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