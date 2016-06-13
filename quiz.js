function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var finalCars = document.getElementById("container");
  var carHTML = "";

  for (var i = 0; i < inventory.length; i++) {
    var currentCar = inventory[i];
    var counter = i;
    carHTML += `<div class="col-sm-4 carBox border" id="car-${counter}" style="border-color: ${currentCar.color}"><h1>${currentCar.make} ${currentCar.model}</h1>`;
    carHTML += `<h5>${currentCar.year} | ${currentCar.color}</h5>`;
    carHTML += `<h6>Cost: ${currentCar.price}</h6>`;
    carHTML += `<h6>Purchased: ${currentCar.purchased}</h6>`;
    carHTML += `<p>${currentCar.description}</p>`
    carHTML += `</div>`;
  }

  finalCars.innerHTML = carHTML;

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);