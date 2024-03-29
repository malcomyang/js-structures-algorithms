const dataSource = Symbol('dataSource');
const top = Symbol('top');

function Length() {
    return this[dataSource].length;
}

function Push(element) {
    if (element == null || element == undefined){
        throw new Error('Can not push null or undefined.');
    } else if (Array.isArray(element)){
        this[dataSource] = this[dataSource].concat(element);
        this[top] += element.length;
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

class Stack {
    constructor(element){
        this[dataSource] = [];
        this[top] = 0;
        this.length = Length;
        this.push = Push;
        this.pop = Pop;
        this.peek = Peek;
        this.clear = Clear;

        this.push(element);
    }    
};

export default Stack;