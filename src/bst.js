class Node {
    constructor (data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show () {
        return this.data;
    }
}

const push = Symbol('push');
const getInOrder = Symbol('get inOrder');
const getPreOrder = Symbol('get preOrder');
const getPostOrder = Symbol('get postOrder');
const isNode = Symbol('is node');
const getSmallest = Symbol('get Smallest');
const removeNode = Symbol('remove Node');
class BST {
    constructor (){
        this.root = null;
    }

    insert (data){
        if (Array.isArray(data)){
            for (let i = 0; i < data.length; i++){
                [push](data[i]);
            }
        } else {
            [push](data);
        }
    }

    find (data){
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

    remove (data) {
        [removeNode](this.root, data);
    }

    inOrder (node){
        [isNode](node);
        let box = [];
        this[getInOrder](node, box);
        return box;
    }

    preOrder (node){
        [isNode](node);
        let box = [];
        this[getPreOrder](node, box);
        return box;
    }

    postOrder (node){
        [isNode](node);
        let box = [];
        [getPostOrder](node, box);
        return box;
    }

    [push] (data){
        let node = new Node(data, null, null);
        if (this.root == null){
            this.root == node;
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
                } else {
                    current = current.right;
                    if (current == null){
                        parent.right = node;
                        break;
                    }
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