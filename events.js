var CarLot = (function () {

  CarLot.activateEvents = function () {
    var contains = document.getElementById("container");
    contains.addEventListener("click", CarLot.border);
    var textInput = document.getElementById("text-input");
    textInput.setAttribute("onkeyup", "CarLot.replaceDescription()");
  }

  return CarLot;
})(CarLot);