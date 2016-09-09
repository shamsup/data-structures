

function pushTest(stack) {
  for(var i=numTimesToTest; i > 0; i--) {
    stack.push(i);
  }
}

function popTest(stack) {
  for(var i=numTimesToTest; i > 0; i--) {
    stack.pop();
  }
}

function queueSizeTest(obj) {
  for(var i=numTimesToTest; i > 0; i--) {
    obj.size();
  }
}

function stackSizeTest(obj) {
  for(var i=numTimesToTest; i > 0; i--) {
    obj.size();
  }
}

function enqueueTest(queue) {
  for(var i=numTimesToTest; i > 0; i--) {
    queue.enqueue(i);
  }
}

function dequeueTest(queue) {
  for(var i=numTimesToTest; i > 0; i--) {
    queue.dequeue();
  }
}

_.each(stacks, pushTest);
_.each(queues, enqueueTest);
_.each(queues, queueSizeTest);
_.each(stacks, stackSizeTest);
_.each(stacks, popTest);
_.each(queues, dequeueTest);


// creating time  functional     functional-shared      prototypal       pseudoclassical
//                  stack: 61.7   stack: 54.6            stack: 2.7       stack: 7.7
//                  queue: 61.6   queue: 59.2            queue: 3.0       queue: 1.9

// PUSH TIME        stack: 386     stack: 404.4           stack: 311.8     stack: 323.4

// POP TIME         stack: 1176.0  stack: 1051.7          stack: 1136.9    stack: 1109.5

// ENQUEUE          queue: 349.3   queue: 410.1           queue: 289.5     queue: 286.2

// DEQUEUE          queue: 2015.3  queue: 1871.7          queue: 1985.5    queue: 1985.5

// SIZE             stack: 20.1    stack: 18.4            stack: 18.9      stack: 20.2
//                  queue: 21.4    queue: 21.5            queue: 21.6      queue: 20.2
