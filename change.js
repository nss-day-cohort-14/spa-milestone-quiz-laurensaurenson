var CarLot = ( function (Cars) {

  CarLot.replaceDescription =  function () {
    var selectedCard = document.getElementsByClassName("selected");
    var textInput = document.getElementById("text-input");  
    var replacedDescript = selectedCard[0].getElementsByTagName("p");
    if (event.keyCode === 13) {
      for (var i = 0; i < selectedCard.length; i++) {
        selectedCard[i].classList.remove("selected");
      }
      return textInput.value = "";
    }
    replacedDescript[0].innerText = textInput.value;
  };

  CarLot.border = function (place, color) {
    var cardsToUnborder = document.getElementsByClassName("carBox");
    console.log("place: ", place);
    CarLot.unborder();
    place.classList.add("selected");
    place.style.backgroundColor = color;
    CarLot.selectTextInput();
  }

  CarLot.unborder = function () {
    var cardsToUnborder = document.getElementsByClassName("carBox");
    for (var i = 0; i < cardsToUnborder.length; i++) {
      cardsToUnborder[i].classList.remove("selected");
      cardsToUnborder[i].style.backgroundColor = "#fff";
    }
  }  

  CarLot.selectTextInput = function () {    
    var textInput = document.getElementById("text-input");  
    textInput.value = "";
    textInput.focus();
  }

  return Cars;
})(CarLot);