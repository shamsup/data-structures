

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var newNode = Node(value);
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var node;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      node = this.nodes[i];
      this.nodes.splice(i, 1);

      for (var j = 0; j < this.nodes.length; j++) {
        this.nodes[j].unlink(node);
      }
      return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  var fromNode = this.findNode(fromValue);
  var toNode = this.findNode(toValue);

  if (fromNode && toNode && fromNode.hasLink(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  var fromNode = this.findNode(fromValue);
  var toNode = this.findNode(toValue);

  if (fromNode && toNode) {
    fromNode.linkTo(toNode);
    toNode.linkTo(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  var fromNode = this.findNode(fromValue);
  var toNode = this.findNode(toValue);

  if (fromNode && toNode) {
    fromNode.unlink(toNode);
    toNode.unlink(fromNode);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

Graph.prototype.findNode = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return this.nodes[i];
    }
  }
  return;
};

var Node = function(value) {
  var links = [];
  var node = {};

  node.value = value;

  node.linkTo = function(otherNode) {
    if (!links.includes(otherNode)) {
      links.push(otherNode);
    }
  };

  node.unlink = function(otherNode) {
    for (var i = 0; i < links.length; i++) {
      if (links[i] === otherNode) {
        links.splice(i, 1);
      }
    }
  };

  node.hasLink = function (otherNode) {
    return links.includes(otherNode);
  };

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


