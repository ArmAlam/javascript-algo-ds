
// a node boilerplate
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	// Add new node at the end of a linked list
	// complexity O(1)
	push(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
			7
		}
		this.length++;
	}

	// adding node at the beginning
	// complexity O(1)
	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	// remove node from the beginning
	// complexity O(1)
	shift() {
		const temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	// remove element from the end
	// complexity O(n)
	pop() {
		if (!this.head) return null;

		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return temp
	}

	// get element from specified index
	// complexity O(n)
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let temp = this.head

		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}

		return temp;
	}

	// reverse the linked list
	// complexity O(n)
	reverse() {
		// swap head and tail
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;

		// working with pointers
		let next = temp.next;
		let prev = null;

		for (let i = 0; i < this.length; i += 1) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
	}
}

const linkedList = new LinkedList(10);
linkedList.push(11)
linkedList.push(12)
console.log(linkedList.get(1));