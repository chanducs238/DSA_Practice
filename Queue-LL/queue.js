class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
             this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        if(this.first === this.last){
            this.last = null;
        }
        let current = this.first;
        this.first = current.next;
        this.size--;
        return current.value;
    }
}

q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);