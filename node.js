'use strict';

class _Node {
  constructor(value, next, prior) {
    this.value=value;
    this.next=next;
    this.prior=prior;
  }
}

module.exports = _Node;