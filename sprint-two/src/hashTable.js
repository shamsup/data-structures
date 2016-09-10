

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._min = 8;
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = Bucket();
    this._storage.set(index, bucket);
  }

  if (bucket.insert(k, v)) {
    this.count++;
  }

  if (this.count >= 0.75 * this._limit) {
    this._resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    return bucket.retrieve(k);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);



  if (bucket && bucket.remove(k)) {
    this.count--;
    if (this._limit > this._min && this.count < 0.25 * this._limit) {
      this._resize(this._limit * 0.5);
    }
  }
};

HashTable.prototype._resize = function(limit) {
  this._limit = limit;
  this.count = 0;
  var oldBuckets = this._storage;
  this._storage = LimitedArray(this._limit);

  oldBuckets.each(function(bucket) {
    bucket.each(function(node) {
      this.insert(node.key, node.value);
    }.bind(this));
  }.bind(this));
};


var Bucket = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.insert = function (key, value) {
    var node = list.head;
    while (node) {
      if (node.key === key) {
        node.value = value;
        return false;
      }
      node = node.next;
    }

    var newNode = HashNode(key, value);
    if (!list.head) {
      list.head = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
    return true;
  };

  list.remove = function (key) {
    var node = list.head;
    if (node.key === key) {
      list.head = node.next;
      return true;
    }
    while (node.next) {
      if (node.next.key === key) {
        node.next = node.next.next;
        return true;
      }
    }
    return false;
  };

  list.retrieve = function (key) {
    var node = list.head;
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return;
  };

  list.each = function(cb) {
    var node = list.head;

    while (node) {
      cb(node);
      node = node.next;
    }
  };

  return list;
};

var HashNode = function(key, value) {
  var node = {};

  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
