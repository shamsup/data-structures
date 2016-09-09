function instantiatingFunctionalStacks() {
  var functionalStacks = [];
  for (var i = 0; i < numToMake; i++) {
    functionalStacks.push(Stack());
  }
  return functionalStacks;
}

function instantiatingFunctionalQueues(){
  var functionalQueues = [];
  for (var i = 0; i < numToMake; i++) {
    functionalQueues.push(Queue());
  }
  return functionalQueues;
}

var stacks = instantiatingFunctionalStacks();
var queues = instantiatingFunctionalQueues();
