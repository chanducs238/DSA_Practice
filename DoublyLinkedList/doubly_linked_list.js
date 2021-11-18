class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
           this.head = newNode;
           this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;
        let removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index){
        if(!this.head ||index >= this.length || index < 0) return undefined;
        let count, current;
        if(index <= this.length/2){
             current = this.head;
             count = 0;
            while(count !== index){
                current = current.next;
                count++
            }
        } else {
            count = this.length-1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val){
        let nodeFound = this.get(index);
        if(nodeFound){
            nodeFound.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(!this.head || index > this.length || index < 0) return false;
        if(this.length === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;

    }

    remove(index){
        if(!this.head || index >= this.length || index < 0) return false;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let removedNode = this.get(index);
        // let beforeNode = removedNode.prev;
        // let afterNode = removedNode.next;
        // beforeNode.nexr = afterNode;
        // afterNode.prev = beforeNode;
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

list = new DoublyLinkedList();

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)