var Coord = function(x, y) {
  this.x = x;
  this.y = y;

  this.plus = function(dir) {
    switch(dir){
    case "N":
      this.x -= 1;
      break;
    case "S":
      this.x += 1;
      break;
    case "E":
      this.y += 1;
      break;
    case "W":
      this.y -= 1;
      break;
    };
  };

}

_.extend(Coord.prototype, {
  isValid: function(otherCoord) {

  },

  isSameAs: function(otherCoord) {
    return (this.x === otherCoord.x && this.y === otherCoord.y);
  },


  getHtmlID: function() {
    return ("" + this.x + "-" + this.y);
  }
})