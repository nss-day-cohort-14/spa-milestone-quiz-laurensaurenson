function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var finalCars = document.getElementById("container");
  var carHTML = "";


  for (var i = 0; i < inventory.length; i++) {
    var currentCar = inventory[i];
    carHTML += `<div class="col-sm-4" style="border: 2px solid ${currentCar.color}"><h1>${currentCar.model}</h1>`;
    
    carHTML += `</div>`
    // console.log("carHTML: ", carHTML);
  }

  finalCars.innerHTML = carHTML;

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);