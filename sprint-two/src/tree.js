var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  newTree.children = [];  // fix me
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;
};

treeMethods.removeParent = function() {
  // this == child
  if (this.parent) {
    for (var i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i] === this) {
        this.parent.children.splice(i, 1);
      }
    }
    this.parent = undefined;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 *    addChild: O(1)
 *    contains: O(c^n)
 */
