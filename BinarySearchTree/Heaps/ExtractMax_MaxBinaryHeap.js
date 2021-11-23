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

    extract(){
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;   
        sinkDown();
        return max;
    }

    sinkDown(){
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];

        while(true){
            let leftChildIndex = (2*index) + 1;
            let rightIndex= (2*index) + 2;

            if(leftChildIndex < length){

            }

        }
    }
}

