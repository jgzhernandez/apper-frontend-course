class Stack{
    constructor(){
        this.stack = []
    }

    push(item){
        if(typeof item === "string"){
            this.stack.push(item)
        }else if(Array.isArray(item)){
            item.forEach((i)=>{
                typeof(i) === "string" ? this.stack.push(i) : console.log(`Item '${i}' is not a string.`)
            })
        }else{
            console.log(`Item ${item} does not contain a string.`)
        }
    }

    pop(){
        if(this.stack.length === 0){
            console.log("Stack is currently empty.")
            return
        }
        this.stack.pop()
    }

    check(){
        console.log(this.stack)
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Ice Cream”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”