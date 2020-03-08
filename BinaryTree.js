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
        console.log(newNode)
        console.log(newNode.data < node.data)
        if(newNode.data < node.data){
            if(node.left===null)
                node.left = newNode;
            else {
                this.insertNode(node.left, newNode)
            }
        } else if (newNode.data > node.data) {
            if(node.right === null)
                node.right = newNode;
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    search(){}
    traverse(){}
    remove(){}
}

let tree = new BinaryTree();
tree.insert(4);
tree.insert(2);
tree.insert(5);

console.dir(tree)