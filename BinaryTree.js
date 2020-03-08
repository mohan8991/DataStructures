class Node {
    constructor(data){
        this.data = data;
        this.right=null;
        this.left=null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root==null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.data < node){
            node.left = newNode;
        } else if (newNode.data > node) {
            node.right = newNode;
        }

    }

    search(){}
    traverse(){}
    remove(){}
}
