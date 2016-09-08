var Queue = function() {
  var init = Object.create(queueMethods);
  init.count = 0;
  init.minKey = 0;
  init.maxKey = 0;
  init.storage = {};

  return init;
};

var queueMethods = {
  size: function () {
    return this.count;
  },
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
  }
};


