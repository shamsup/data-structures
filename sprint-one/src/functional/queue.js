var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var minKey = 0;
  var maxKey = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {

    storage[maxKey] = value;
    maxKey += 1;
    size += 1;
    return size;
  };

  someInstance.dequeue = function () {
    if (size === 0) {
      return;
    }
    var result = storage[minKey];
    delete storage[minKey];
    minKey += 1;
    size -= 1;
    return result;
  };

  someInstance.size = function () {
    return size;
  };

  return someInstance;
};
