var CarLot = (function () {

  CarLot.activateEvents = function () {
    var cars = document.getElementsByTagName("car");
    for (var i = 0; i < cars.length; i++) {
      cars[i].addEventListener("click", function () {
        var car = event.currentTarget;
        var background = "#c6fdf4";
        CarLot.border(car, background);
      });

    }

    var textInput = document.getElementById("text-input");
    textInput.setAttribute("onkeyup", "CarLot.replaceDescription()");
  }

  return CarLot;
})(CarLot);