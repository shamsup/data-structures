var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value === this.value) {
    return;
  }

  var side = (value < this.value) ? 'left' : 'right';

  if (this[side]) {
    this[side].insert(value);
    return;
  }

  this[side] = new BinarySearchTree(value);
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  var side = (value < this.value) ? 'left' : 'right';

  if (this[side]) {
    return this[side].contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * insert:   average: O(log(n))   worst: O(n)
 * contains: average: O(log(n))   worst: O(n)
 * depthFirstLog: O(n)
 */
