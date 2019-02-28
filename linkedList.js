'use strict';
const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  find(item) { 
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let prevNode = this.head;
    //keep track of next
    let nextNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item 
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        prevNode = currNode;
        currNode = currNode.next;
        nextNode = currNode.next;
      }
    }
    //found it
    return {prevNode, currNode, nextNode};
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

  insertBefore(find, value) {
    const {prevNode, currNode} = this.find(find);

    if(currNode.value === find){
      let newNode = new _Node(value, currNode);
      prevNode.next = newNode;
      return;
    }

  }

  insertAfter(find, value) {
    const {currNode, nextNode} = this.find(find);

    if(currNode.value === find){
      let newNode = new _Node(value, nextNode);
      currNode.next = newNode;
      return;
    }

  }

  insertAt(item) {
    // Keep track of previous and current node
    // 1. Create new node
    // 2. Next pointer will point to current node
    // 3. Previous node next pointer will now be pointing to new node
  }

  remove(item) {
    // If list is empty
    if (!this.head) {return null;}

    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  size() {
    return console.log('Tauhida said not to put this in here, so why are you calling it?????');
  }
}

// function display(sll) {

// }

// function size() {

// }

function main() {
  let SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertAfter('Helo', 'Hotdog');
  // const {prevNode} = SLL.find('Boomer');
  // console.log(prevNode);
  console.log(SLL.find('Hotdog'));
  console.log(SLL);

}

main();