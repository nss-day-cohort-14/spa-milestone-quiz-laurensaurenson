var CarLot = ( function (Cars) {

// called onkeyup to replace description //
  Cars.replaceDescription =  function () {
    var selectedCard = document.getElementsByClassName("selected");
    if ( selectedCard[0] === undefined ) {
      return
    }
    var textInput = document.getElementById("text-input");  
    var replacedDescript = selectedCard[0].getElementsByTagName("p");
    if (event.keyCode === 13) {
      for (var i = 0; i < selectedCard.length; i++) {
        selectedCard[i].style.backgroundColor = "#fff";
        selectedCard[i].classList.remove("selected");
      }
      return textInput.value = "";
    }
    replacedDescript[0].innerText = textInput.value;
  };

// borders and changes background color //
  Cars.border = function (place, color) {
    var cardsToUnborder = document.getElementsByClassName("carBox");
    Cars.unborder();
    place.classList.add("selected");
    place.style.backgroundColor = color;
    Cars.selectTextInput();
  }

// unborders and reverts background color to white //
  Cars.unborder = function () {
    var cardsToUnborder = document.getElementsByClassName("carBox");
    for (var i = 0; i < cardsToUnborder.length; i++) {
      cardsToUnborder[i].classList.remove("selected");
      cardsToUnborder[i].style.backgroundColor = "#fff";
    }
  }  

// selects and clears text input -- used when clicking on card to change description // 
  Cars.selectTextInput = function () {    
    var textInput = document.getElementById("text-input");  
    textInput.value = "";
    textInput.focus();
  }

  return Cars;
})(CarLot);