'use strict';
const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode=tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertAt(item) {
    // Keep track of previous and current node
    // 1. Create new node
    // 2. Next pointer will point to current node
    // 3. Previous node next pointer will now be pointing to new node
  }

  deleteStart(item) {
    // Easy...just redirect head pointer to next node
  }

  deleteMiddleOrEnd(item) {
    // Navigate to the node before the node to delete
    // Set the next pointer of the node before to the node after
  }

  size() {
    return console.log('Tauhida said not to put this in here, so why are you calling it?????');
  }
}

function display(sll) {

}

function size() {

}

function main() {

}

main();