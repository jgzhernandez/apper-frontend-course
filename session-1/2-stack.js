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
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”