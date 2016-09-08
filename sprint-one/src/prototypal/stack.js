var Stack = function() {
  var init = Object.create(stackMethods);

  init.count = 0;
  init.storage = {};

  return init;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.count] = value;
    this.count += 1;
    return this.count;
  },
  pop: function() {
    if(this.count === 0){
      return;
    }
    var result = this.storage[this.count -1];
    delete this.storage[this.count - 1];
    this.count -= 1;
    return result;
  },
  size: function (){
    return this.count;
  }
};


