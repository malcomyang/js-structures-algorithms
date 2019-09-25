class Node{
    constructor(element){
        if (element == null && element == undefined){
            throw new Error('Nodes cannot be null or undefined.');
        }
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

const ele = Symbol('element');
const head = Symbol('head');
class LinkedList {
    constructor (element) {
        this[head] = new Node(ele);
        if (element != null && element != undefined){
            this[head].next = new Node(element);
            this[head].next.previous = this[head];
        }
    }

    find (item) {
        let currNode = this[head];
        while (currNode.element != item && currNode.next != null){
            currNode = currNode.next;
        }

        if (currNode.element == item) return currNode;
            
        return null;
    }

    first () {
        return this[head].next;
    }

    last () {
        let currNode = this[head];
        while(currNode.next !== null){
            currNode = currNode.next;
        }
        return currNode;
    }

    insert (item, element) {
        let current = find(item);
        if (current == null) throw new Error('The specified node is not in the list.');

        let newNode = new Node(element);
        newNode.previous = current;
        newNode.next = newNode.next
        if (current.next != null) {
            current.next.previous = newNode
        }
        current.next = newNode;
    }

    remove (item) {
        let currNode = find(item);
        if (currNode == null){
            return;
        }
        
        currNode.previous.next = currNode.next;
        if (currNode.next != null) currNode.next.previous = currNode.previous;
        currNode = null;
    }
}

export default LinkedList;