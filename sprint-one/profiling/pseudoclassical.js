function instantiatingPseudoclassicalStacks() {
  var pseudoclassicalStacks = [];
  for (var i = 0; i < numToMake; i++) {
    pseudoclassicalStacks.push(new Stack());
  }
  return pseudoclassicalStacks;
}

function instantiatingPseudoclassicalQueues() {
  var pseudoclassicalQueues = [];
  for (var i = 0; i < numToMake; i++) {
    pseudoclassicalQueues.push(new Queue());
  }
  return pseudoclassicalQueues;
}

var stacks = instantiatingPseudoclassicalStacks();
var queues = instantiatingPseudoclassicalQueues();
