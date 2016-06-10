var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      console.log("inventory: ", inventory );
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responseText);
      });
    }
  };

})();