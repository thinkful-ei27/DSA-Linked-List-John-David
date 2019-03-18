'use strict';
const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addCycleNode(item1, item2) {
    const node1 = new _Node(item1, this.head)
    const node2 = new _Node(item2, node1)
    node1.next = node2;
    this.head = node2;
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

  insertAt(item, index) {
    let prevNode = this.head;
    let currNode = this.head;

    let count = 0;
    while(count !== index) {
      prevNode = currNode;
      currNode = currNode.next;
      count++;
    }
    this.insertAfter(prevNode.value, item);

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

function display(SLL) {
  console.log(JSON.stringify(SLL, null, 2));
}

function size(head) {
  if (head.next === null) {
    return 1;
  }
  return size(head.next) + 1;
}

function isEmpty(sll) {
  // Finds if the list is empty or not
  return (sll.head === null);
}

function findPrevious(sll, item) {
  const {prevNode} = sll.find(item);
  return prevNode;
}

function findLast(head) {
  // Base
  if (head.next === null) {
    return head.value;
  }
  return findLast(head.next);
}

// Mystery program
// Runtime complexity = O(n^2)
// What does this program do? This program does not do anything...no return value, no mutation.
function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

function reverseList(head, prev) {
  if (head.next === null) {
    head.next = prev;
    console.log("base Case Head: ", head)
    return head;
  }
  // console.log('currNode is ', currNode);
  // Take next, and point to prior node
  const ret = reverseList(head.next, head);
  head.next = prev;
  return ret;
}

function reverseList(head, prev) {

  if (head.next === null) {
    head.next = prev;
    return head
  }

  const ret = reverseList(head.next, head)
  head.next = prev;
  return ret
}

function threeFromTheEnd(SLL) {
   let currNode = SLL.head;
  while(currNode.next.next.next.next !== null) {
    currNode = currNode.next;
  } 
  return currNode.value;

}


function middleList(SLL) {
   let currNode = SLL.head;
   let middleNode = SLL.head;
  while((currNode !== null && currNode.next !== null)) {
    currNode = currNode.next.next
    middleNode = middleNode.next
  }

}

function cycleLists(SLL) {
  let currNode = SLL.head;
  // let listSize = size(SLL.head)
  while(true) {
    currNode = currNode.next;
    if (currNode === null) {
      return false
    }
    if (currNode.value === SLL.head.value) {
      break;
    }
  }
  return true;
}

function reverseList(node, prevNode) {

  if (node.next === null) {

    node.next = prevNode
    return node
  }

  const ret = reverseList(node.next, node)


}

function binarySearch(arr, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? Array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end ) / 2)
  const item = array[index]

  console.log(start, end);

  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index -1)
  }

}





function binSearch(array, value, start, end) {
  let start = start === undefined ? 0 : start;
  let end = end === undefined ? array.length : end;

  const halfValue = Math.floor((start + end) / 2)

  if (start > end) {
    return -1
  }

  if (item === value) {
    return item
  } else if (item < value) {
    return binarySearch(array, value, halfValue + 1, end)
  } else if (item > value) {
    return binarySearch(array, value, halfValue + 1, end);
  }
}

function revlist(node, prevNode) {

  if (node.next === null) {
    node.next = prevNode
    return node
  }

  const ret = revlist(node.next, node)
  node.next = prevNode;
  return ret;
}



function main() {
  let SLL = new LinkedList();
  let CycleList = new LinkedList();
  CycleList.addCycleNode('Hi', 'Bye')
  // CycleList.insertLast('abc')
  // CycleList.insertAt('abcd')
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertLast('John');
  SLL.insertLast('Johnny');
  console.log(JSON.stringify(reverseList(SLL.head)))


  // SLL.insertLast('Tauhidaaa');
  // SLL.remove('squirrel');
  // SLL.insertBefore('Boomer', 'Athena');
  // SLL.insertAfter('Helo', 'Hotdog');
  // SLL.insertAt('Kat', 4);
  // SLL.remove('Tauhida');
  
  // console.log(JSON.stringify(SLL, null, 2));
  // console.log(size(SLL.head));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Husker'));
  // console.log(findLast(SLL.head));
  // console.log(JSON.stringify(WhatDoesThisProgramDo(SLL), null, 2));
  // console.log(reverseList(SLL.head));
  // console.log(threeFromTheEnd(SLL))
  // console.log(middleList(SLL))
  // console.log(CycleList)
}

main();