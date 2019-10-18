const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;

    }


    append(data) {
        let node = new Node(data);
        if (!this._head.data) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }


    head() {
        return this._head ? this._head.data : null;
    }


    tail() {
        return this._tail ? this._tail.data : null;
    }


    at(index) {
        if (index > -1) {
            let element = this._head;
            let i = 0;
            while ((element.data !== null) && (i < index)) {
                element = element.next;
                i++;
            }

            return element != null ? element.data : null;
        } else {
            return null;
        }
    }


    insertAt(index, data) {
        let element = this._head;
        let i = 1;
        let node = new Node(data);
        if (index == 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
        } else {
            while (element!=null)  {
                element = element.next;
                if (i == index) {
                    node.prev = element.prev;
                    element.prev.next = node;
                    node.next = element;
                    element.prev = node;
                }
                i++;
            }
        }
        this.length++;
        return this;
    }



    isEmpty() {
        return this.length < 1 ? true : false;
    }


    clear() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let element = this._head;
        let i = 1;
        if (index == 0) {
            if (this.length == 1) {
                this._head = null;
                this._tail = null;
            } else {
                this._head = this._head.next;
                this._head.next = null;
            }
        } else {
            while (element) {
                element = element.next
                if (element == this._tail) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                } else if (i == index) {
                    element.prev.next = element.next;
                    element.next.prev = element.prev;
                    break;
                }
                i++;
            }
        }
        this.length--;
        return this;
    }

    reverse() {
        let element = this._head;
        let prev_element = null;
        while (element) {
            let next_element = element.next;
            element.next = prev_element;
            element.prev = next_element;
            prev_element = element;
            element = next_element;
        }
        this._tail = this._head;
        this._head = prev_element;
        return this;
    }

    indexOf(data) {
        let element = this._head;
        let i = 0;
        while (element) {
            if (element.data == data) {
                return i
            }
            element = element.next
            i++
        }
        return -1;
    }

}


module.exports = LinkedList;
