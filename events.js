var CarLot = (function () {

  CarLot.activateEvents = function () {

  var contains = document.getElementById("container");
  contains.addEventListener("click", border);

  function border () {
    var cardToBorder = event.target.closest("div");
    var cardsToUnborder = document.getElementsByClassName("carBox");
    for (var i = 0; i < cardsToUnborder.length; i++) {
      cardsToUnborder[i].classList.remove("bordered");
    }
    cardToBorder.classList.add("bordered");
    console.log("border: ", cardToBorder );
  }


  }

  return CarLot;
})(CarLot);