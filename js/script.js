var chipotle = 1.59;
    swissBurger = 13.99;
    guacamole = 1.79;
    quesadillaBurger = 14.29;

   
    chipotleEl = document.getElementById('chipotle');
    swissBurgerEl = document.getElementById('swiss-price');
    swissChipotlePrice = chipotle + swissBurger;
    swissChipotlePriceEl = document.getElementById('swiss-w-chipotle');

    chipotleEl.textContent = chipotle.toFixed(2);
    swissBurgerEl.textContent = swissBurger.toFixed(2);
    swissChipotlePriceEl.textContent = swissChipotlePrice.toFixed(2);
    
    guacamoleEl = document.getElementById('guacamole');
    quesadillaBurgerEl = document.getElementById('quesadilla-price');
    quesGuaPrice = guacamole + quesadillaBurger;
    quesGuaPriceEl = document.getElementById('quesadilla-w-guacamole');

    guacamoleEl.textContent = guacamole.toFixed(2);
    quesadillaBurgerEl.textContent = quesadillaBurger.toFixed(2);
    quesGuaPriceEl.textContent = quesGuaPrice.toFixed(2);
