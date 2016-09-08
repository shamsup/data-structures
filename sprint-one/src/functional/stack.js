var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    someInstance[counter] = value;
    counter++;

    return counter;
  };

  someInstance.pop = function () {
    if (counter === 0) {
      return;
    }

    var result = someInstance[counter - 1];
    delete someInstance[counter - 1];

    counter--;

    return result;
  };

  someInstance.size = function () {
    return counter;
  };

  return someInstance;
};
