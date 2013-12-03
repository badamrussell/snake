//["N", "E", "S", "W"]



var Snake = function(startX, startY) {
  this.dir = "N";
  this.segments = [];

  this.makeSnake(startX, startY);

}

_.extend(Snake.prototype, {
  makeSnake: function(x, y) {
    var tail = new Coord(x, y);
    this.segments.push(tail);
    var self = this;

    for (var i=0; i < 5; i++) {
      //this.grow.bind(this);
      this.grow();
    }
  },

  move: function() {
    this.segments.pop();
    var prevHead = this.segments[0];
    var head = new Coord(prevHead.x, prevHead.y);
    head.plus(this.dir);
    this.segments.unshift(head);
  },

  turn: function(turnDir) {
    this.dir = turnDir;
  },

  grow: function() {
    var prevHead = this.segments[this.segments.length-1];
    var head = new Coord(prevHead.x, prevHead.y);
    var tailDir = this.dir == "S" ? "N" : "S";
    head.plus(tailDir);
    this.segments.push(head);
  },

  hasCoord: function(otherCoord) {
   var overlap = false;
   this.segments.forEach(function(coord) {
     if (coord.isSameAs(otherCoord)){
       overlap = true;
       return;
     };
   });
   return overlap;
  }
});
