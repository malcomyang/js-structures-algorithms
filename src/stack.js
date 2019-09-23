const dataSource = Symbol('dataSource');
const top = Symbol('top');
class Stack {
    constructor(){
        this[dataSource] = [];
        this[top] = 0;
    }

    length() {
        return this[dataSource].length;
    }

    push(element) {
        if (element == null || element == undefined){
            throw new Error('Can not push null or undefined to stack.');
        } else {
            this[dataSource][this[top]++] = element;
        }
    }

    pop() {
        if (this[top] === 0){
            throw new Error('There was no element in stack')
        } else {
            return this[dataSource][--this[top]];
        }
    }

    peek() {
        return this[dataSource][this[top] - 1];
    }

    clear() {
        this[dataSource] = [];
        this[top] = 0;
    }
};

export default Stack;