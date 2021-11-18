class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
         
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            console.log(current);
            return current;
        
    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
      //  console.log(currentHead)
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        console.log(current)
        return current;
    }

    set(index, val){
        let found = this.get(index);
        if(found){
            found.val = val;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let prevnode = this.get(index-1);
        let removedNode = prevnode.next;
        prevnode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = node;
        let prev = null;
        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}

let list = new SinglyLinkedList();
// list.push('Hi');
// list.push('there');
// list.shift();
// list.unshift('Hi');
// list.set(0, 'Hello');
// list.remove(2);
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.push(600);

//list.reverse();
list.print();

console.log(list);