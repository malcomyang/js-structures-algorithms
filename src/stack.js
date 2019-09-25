const dataSource = Symbol('dataSource');
const top = Symbol('top');

function Length() {
    return this[dataSource].length;
}

function Push(element) {
    if (element == null || element == undefined){
        throw new Error('Can not push null or undefined to stack.');
    } else if (Array.isArray(element)){
        for(let i = 0; i < element.length; i++){
            this[dataSource][this[top]++] = element[i];
        }
    } else {
        this[dataSource][this[top]++] = element;
    }
}

function Pop() {
    if (this[top] === 0){
        return null;
    } else {
        return this[dataSource][--this[top]];
    }
}

function Peek() {
    return this[dataSource][this[top] - 1];
}

function Clear() {
    this[dataSource] = [];
    this[top] = 0;
}

function SeedData(that, data){
    if (data == null || data == undefined){
        return false;
    } else if (Array.isArray(data)){
        for(let i = 0; i < data.length; i++){
            that[dataSource][that[top]++] = data[i];
        }
    } else {
        that[dataSource][that[top]++] = data;
    }
}

class Stack {
    constructor(element){
        this[dataSource] = [];
        this[top] = 0;
        this.length = Length;
        this.push = Push;
        this.pop = Pop;
        this.peek = Peek;
        this.clear = Clear;

        SeedData(this, element);
    }    
};

export default Stack;