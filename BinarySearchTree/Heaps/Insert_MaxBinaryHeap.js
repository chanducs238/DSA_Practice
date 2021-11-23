class MaxBinaryHeap {
    constructor(){
        this.values = [49, 29, 33, 18, 27, 12];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length-1;
        let element = this.values[index];
        while(index > 0){
        let parentIndex = Math.floor((index-1)/2);
        let parentElement = this.values[parentIndex];
        if(element <= parentElement) break;
            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }
}

