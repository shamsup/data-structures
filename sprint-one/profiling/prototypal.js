function instantiatingPrototypalStacks() {
  var prototypalStacks = [];
  for (var i = 0; i < numToMake; i++) {
    prototypalStacks.push(Stack());
  }
  return prototypalStacks;
}

function instantiatingPrototypalQueues() {
  var prototypalQueues = [];
  for (var i = 0; i < numToMake; i++) {
    prototypalQueues.push(Queue());
  }
  return prototypalQueues;
}

var stacks = instantiatingPrototypalStacks();
var queues = instantiatingPrototypalQueues();
