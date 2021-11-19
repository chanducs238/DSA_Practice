class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        if(this.first === this.last) {
            this.last = null;
        }
        let current = this.first;
        this.first = current.next;
        current.next = null;
        this.size--;
        return current.val;
    }
}

stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)