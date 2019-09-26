function Show(){
    return this.data;
}

class Node {
    constructor (data, left, right){
        if (data == null || data == undefined) throw new Error('Can not insert null or undefined.');
        this.data = data;
        this.count = 1;
        this.left = left;
        this.right = right;
        this.show = Show;
    }
}

const push = Symbol('push');
const getInOrder = Symbol('get inOrder');
const getPreOrder = Symbol('get preOrder');
const getPostOrder = Symbol('get postOrder');
const isNode = Symbol('is node');
const getSmallest = Symbol('get Smallest');
const removeNode = Symbol('remove Node');

function Insert (data){
    if (Array.isArray(data)){
        for (let i = 0; i < data.length; i++){
            this[push](data[i]);
        }
    } else {
        this[push](data);
    }
}

function GetMin(){
    let current = this.root;
    while(current.left != null){
        current = current.left;
    }
    return current.data;
}

function GetMax(){
    let current = this.root;
    while(current.right != null){
        current = current.right;
    }
    return current.data;
}

function Find (data){
    let current = this.root;
    while(current != null){
        if (current.data == data){
            return current;
        } else if (data < current.data){
            current = current.left;
        } else {
            current = current.right;s
        }
    }
    return null;
}

function Remove (data) {
    [removeNode](this.root, data);
}

function InOrder (node){
    [isNode](node);
    let box = [];
    this[getInOrder](node, box);
    return box;
}

function PreOrder (node){
    [isNode](node);
    let box = [];
    this[getPreOrder](node, box);
    return box;
}

function PostOrder (node){
    [isNode](node);
    let box = [];
    [getPostOrder](node, box);
    return box;
}

class BST {
    constructor (data){
        this.root = null;
        this.insert = Insert;
        this.getMin = GetMin;
        this.getMax = GetMax;
        this.find = Find;
        this.remove = Remove;
        this.inOrder = InOrder;
        this.preOrder = PreOrder;
        this.postOrder = PostOrder;

        this.insert(data);
    }

    [push] (data){
        let node = new Node(data, null, null);
        if (this.root == null){
            this.root = node;
        } else {
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                if (data < current.data){
                    current = current.left;
                    if (current == null){
                        parent.left = node;
                        break;
                    }
                } else if (data > current.data) {
                    current = current.right;
                    if (current == null){
                        parent.right = node;
                        break;
                    }
                } else {
                    current.count += 1;
                    break;
                }
            }
        }
    }

    [removeNode] (node, data){
        if (node == null){
            return null;
        }
        if (data == node.data){
            if (node.left == null && node.right == null){
                return null;
            }

            if (node.left == null){
                return node.right;
            }

            if (node.right == null){
                return node.left;
            }

            let temp = [getSmallest](node.right);
            node.data = temp.data;
            node.right = [removeNode](node.right, temp.data);
            return node;
        } else if (data < node.data){
            node.left = [removeNode](node.left, data);
            return node;
        } else {
            node.right = [removeNode](node.right, data);
            return data;
        }
    }

    [getInOrder] (node, box){
        if (node != null){
            this[getInOrder](node.left, box);
            box.push(node.data);
            this[getInOrder](node.right, box);
        }
    }

    [getPreOrder] (node, box){
        if (node != null){
            box.push(node.data);
            [getPreOrder](node.left, box);
            [getPreOrder](node.right, box);
        }
    }

    [getPostOrder] (node, box){
        if (node != null){
            [getPostOrder](node.left, box);
            [getPostOrder](node.right, box);
            box.push(node.data);
        }
    }

    [isNode] (node) {
        if (!(node instanceof Node)){
            throw new Error('It is not node of BST');
        }
    }

    [getSmallest] (node) {
        if (node.left == null){
            return node;
        } else {
            return [getSmallest](node.left);
        }
    }
}

export default BST;