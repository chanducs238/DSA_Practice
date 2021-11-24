class MaxPriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length-1;
        let element = this.values[index];
        while(index > 0){
        let parentIndex = Math.floor((index-1)/2);
        let parentElement = this.values[parentIndex];
        if(element.priority <= parentElement.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }

    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
        this.values[0] = end;   
        this.sinkDown();
        }
        return max;
    }

    sinkDown(){
       
        let index = 0;
        let length = this.values.length;
        while(true){
        let leftChildIndex = (2 * index) + 1;
        let rightChildIndex = (2 *index) + 2;
        let element = this.values[index];
        let swap = null;
        let leftChild, rightChild = null;
       
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority > element.priority){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild.priority > element.priority) 
                || (swap != null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] =  element;
            index = swap;
        }
     }
}

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

maxPQ = new MaxPriorityQueue();
maxPQ.enqueue('p1', 1);
maxPQ.enqueue('p2', 2);
maxPQ.enqueue('p3', 3);
maxPQ.enqueue('p4', 4);
