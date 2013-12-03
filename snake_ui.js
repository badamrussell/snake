var renderBoard = function() {
  for (var i=0; i < board.HEIGHT; i++) {
    var $row = $('<div class="row"></div>');

    for (var j=0; j < board.WIDTH; j++) {
      var $cell = $('<div class="cell"></div>');
      var idNum = i + "-" + j;
      $cell.attr('id', idNum);
      $row.append($cell);
    }

    $("#grid").append($row);
  }
}

var renderSnake = function() {
  board.snake.segments.forEach( function(coord) {

    var $snakeSegment = $("#" + coord.getHtmlID());
    $snakeSegment.toggleClass("snake");
  })
}

var renderApple = function() {
  var apple = board.apple;
  var $apple = $("#" + apple.getHtmlID()).toggleClass("apple");
}

var render = function() {
  $("#grid").empty();
  renderBoard();
  renderSnake();
  renderApple();
}

board = new Board();

$(function() {

  //grid
  //render();
  board.start();
});