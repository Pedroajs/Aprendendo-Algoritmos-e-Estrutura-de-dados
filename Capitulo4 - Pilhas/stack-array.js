class Stack{
    constructor(){
        this.items =[];
    }

    push(element){
        this.items.push(element);
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = [];
    }
    size(){
      return  this.items.length;
    }
}
const stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());