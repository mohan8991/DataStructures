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
        if(this.root==null){
            let newNode = new Node(data)
            this.root = newNode;
        }
    }

    search(){}
    traverse(){}
    remove(){}
}
