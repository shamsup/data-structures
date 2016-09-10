var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = Node(value);
    node.next = list.head;
    if (list.head) {
      list.head.previous = node;
    }

    list.head = node;
  };

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
    }
    if (list.tail) {
      list.tail.next = node;
      node.previous = list.tail;
    }
    list.tail = node;

  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    }
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.removeTail = function() {
    if (!list.tail) {
      return;
    }
    var result = list.tail.value;
    list.tail = list.tail.previous;
    return result;
  };

  list.contains = function(target) {
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var DoublyNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
          addToTail: O(1)
          removeHead: O(1)
          contains: O(n)


 */
