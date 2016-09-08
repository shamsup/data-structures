var Queue = function() {
  var storage = {};
  var init = {
    minKey: 0,
    maxKey: 0,
    count: 0,
    storage: {}
  };
  Object.assign(init, queueMethods);

  return init;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.maxKey] = value;
    this.maxKey += 1;
    this.count += 1;

    return this.count;
  },
  dequeue: function () {
    if (this.count === 0) {
      return;
    }

    var result = this.storage[this.minKey];
    delete this.storage[this.minKey];
    this.minKey += 1;
    this.count -= 1;

    return result;
  },
  size: function() {
    return this.count;
  }
};


