class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor (element) {
        this.head = new Node('head');
        if (element != null && element != undefined){
            let newNode = new Node(element);
            newNode.previous = this.head;
            this.head.next = newNode;
        }
    }

    find (item) {
        if (item == null || item == undefined){
            throw new Error('Can not opearation null or undefined.');
        }

        let currNode = this.head;
        while (currNode.element != item && currNode.next != null){
            currNode = currNode.next;
        }

        if (currNode.element == item) return currNode;
            
        return null;
    }

    insert (item, element) {
        let current = find(item);
        if (current == null) throw new Error('');
        if (element == null || element == undefined) throw new Error('Can not insert null or undefined.');

        let newNode = new Node(element);
        newNode.previous = current;
        newNode.next = newNode.next
        newNode.next.previous = newNode
        current.next = newNode;
    }

    remove (item) {
        let currNode = find(item);
        if (currNode == null){
            console.warn('');
            return;
        }
        
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode = null;
    }
}

export default LinkedList;