//["N", "E", "S", "W"]

var HEIGHT = 100;
var WIDTH = 100;

var Coord = function(x, y) {
  this.x = x;
  this.y = y;

  this.plus = function(dir) {
    switch(dir){
    case "N":
      this.y -= 1;
      break;
    case "S":
      this.y += 1;
      break;
    case "E":
      this.x += 1;
      break;
    case "W":
      this.x -= 1;
      break;
    };
  };

  this.random = function() {
    var y = Math.floor(Math.random() * HEIGHT));
    var x = Math.floor(Math.random() * WIDTH));
    return new Coord(x,y);
  }
}

var Snake = function() {
  this.dir = "N";
  this.segments = [];


}

_.extend(Snake.prototype, {
  move: function() {
    this.segments.pop();
    var head = segments[0].plus(this.dir());
    this.segments.unshift(head);
  },

  turn: function(turnDir) {
    this.dir = turnDir;
  },

  makeSnake: function() {
    var tail = new Coord(50,50);
    var self = this;

    for (var i=0; i < 5; i++) {
      this.grow();
    }
  }

  grow: function() {
    console.log("WORRY ABOUT THIS");
    var head = segments[segments.length-1].plus(self.dir);
    this.segments.push(head);
  }

});
