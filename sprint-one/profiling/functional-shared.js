function instantiatingFunctionalSharedStacks() {
  var functionalSharedStacks = [];
  for (var i = 0; i < numToMake; i++) {
    functionalSharedStacks.push(Stack());
  }
  return functionalSharedStacks;
}
function instantiatingFunctionalSharedQueues() {
  var functionalSharedQueues = [];
  for (var i = 0; i < numToMake; i++) {
    functionalSharedQueues.push(Queue());
  }
  return functionalSharedQueues;
}

var queues = instantiatingFunctionalSharedQueues();
var stacks = instantiatingFunctionalSharedStacks();
