var CarLot = (function (Cars) {

// Calls by tag name then adds event listener through array //
  Cars.activateEvents = function () {
    var cars = document.getElementsByTagName("car");

    for (var i = 0; i < cars.length; i++) {
      cars[i].addEventListener("click", function () {
        var car = event.currentTarget;
        var background = "#c6fdf4";
        Cars.border(car, background);
      });
    }

// also adds keyup attribute //
    var textInput = document.getElementById("text-input");
    textInput.setAttribute("onkeyup", "CarLot.replaceDescription()");
  }

  return Cars;
})(CarLot);