
var Board = function() {
  this.HEIGHT = 20;
  this.WIDTH = 20;
  this.FPS = 500;
  this.snake = new Snake(10,10);
  this.apple = this.randomApple();
}

_.extend(Board.prototype, {
  randomApple: function() {
    do {
      var y = Math.floor(Math.random() * this.HEIGHT);
      var x = Math.floor(Math.random() * this.WIDTH);
      var apple =  new Coord(x,y);
    } while (this.snake.hasCoord(apple))
    return apple;
  },

  bindKeyHandlers: function() {
    var MOVES = {
      "up": "N",
      "down": "S",
      "left": "W",
      "right": "E"
    }

    var self = this;
    for (c in MOVES) {
      (function (c, newDir) {
        key(c, function () {
          self.snake.dir = newDir;
        });
      })(c, MOVES[c]);
    };
  },

  step: function() {
    this.snake.move();

    this.eat();
    render();

    if (this.hitBody() || this.outOfBounds()) {
      this.gameOver();
    }
  },

  start: function() {
    this.timerId = setInterval(
      this.step.bind(this),
      this.FPS
    );

    this.bindKeyHandlers();
    //setInterval
  },

  gameOver: function() {
    clearInterval(this.timerId);
    var snakeHeadId = this.snakeHead().getHtmlID();
    var $snakeHead = $("#" + snakeHeadId);
    $snakeHead.addClass("deadsnake");
  },

  outOfBounds: function() {
    var x = this.snakeHead().x;
    var y = this.snakeHead().y;

    return x < 0 || x > this.WIDTH || y < 0 || y > this.HEIGHT;
  },

  eat: function() {
    var snakeHeadId = this.snakeHead().getHtmlID();
    var $snakeHead = $("#" + snakeHeadId);
    if ($snakeHead.hasClass("apple")){
      this.snake.grow();
      this.apple = this.randomApple();
    };
  },

  hitBody: function() {
    for (var i=1; i < this.snake.segments.length-1; i++) {
      if (this.snake.segments[i].isSameAs(this.snakeHead())) {
        return true;
      }
    }
    return false;
  },

  snakeHead: function() {
    return this.snake.segments[0];
  }



});

