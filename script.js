// Factory function to create new Node
function NodeFactory (value = null, nextNode = null) {
    value = value
    nextNode = nextNode
    return {value, nextNode}
}

// Factory function to create new LinkedList, which will represent the full list.
function LinkedListFactory () {
    let headNode = null
    let length = 0

    // Add a new node containing value to the end of the list
    const append = (value) => {
        const newNode = NodeFactory(value)
        // If append is called when list is empty, set this node as head
        if (headNode === null) {
            headNode = newNode
        // Else, select the head node as current, traverse to the tail node, assign the next node as the new one
        } else {
            let currentNode = headNode
            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = newNode
        }
        length++
        return `Append! New Node: ${newNode.value}, Current length: ${length}`
    }

    const prepend = (value) => {
        const newNode = NodeFactory(value)
        // If append is called when list is empty, set this node as head
        if (headNode === null) {
            headNode = newNode
        } else {
            let currentNode = newNode
            currentNode.nextNode = headNode
            headNode = currentNode
        }
        length++
        return `Prepend! New Node: ${newNode.value}, Current length: ${length}`
    }

    const size = () => length

    const head = () => headNode

    const tail = () => {
        let currentNode = headNode
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode
        }
        return currentNode
    }

    const at = (index) => {
        let currentNode = headNode
        if (index < length) {
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode
            }
            return currentNode
        } else {
            return "Index is out of range"
        }
    }

    const pop = () => {
        let currentNode = headNode
        while (currentNode.nextNode.nextNode != null) {
            currentNode = currentNode.nextNode
        }
        currentNode.nextNode = null
        length--
        return `Popped`
    }

    const contains = (value) => {
        let currentNode = headNode
        // Search until second last node
        while (currentNode.nextNode != null) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        // Search the last node
        if (currentNode.value === value) {
            return true
        } else {
            return false
        }
    }

    const find = (value) => {
        let index = 0
        let currentNode = headNode
        // Search until second last node
        while (currentNode.nextNode != null) {
            if (currentNode.value === value) {
                return index
            }
            currentNode = currentNode.nextNode
            index++
        }
        // Search the last node
        if (currentNode.value === value) {
            return index
        } else {
            return "Not found"
        }
    }

    const toString = () => {
        let print = `( ${headNode.value} ) -> `
        let currentNode = headNode
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode
            print = print + `( ${currentNode.value} ) -> `
        }
        print = print +  "null"
        return print
    }


    return {append, prepend, size, head, tail, at, pop, contains, find, toString}
}

const LL = LinkedListFactory()

LL.append("first")
LL.append("second")
LL.append("third")