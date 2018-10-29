function calculateTip() {

  //Check that the input for bill amount is a valid number.
  function checkBillAmount() {
    const bill = document.getElementById('bill-amount').value;

    if (typeof bill !== 'number' || bill === '') {
      alert('Please enter a number.');
    } else {
      return bill;
    }
  };

  //Convert the desired tip amount to a decimal number.
  function convertTip() {
    const desiredTip = document.getElementById('tip-percentage').value;
    const tipAmount = parseFloat(desiredTip) * 0.01;
    return tipAmount;
  };

  //If the box is checked, a text box should show asking the user
  //how many people will be splitting the bill.

  function showBox() {
    const checkBox = document.getElementById('split-check');
    const numPeople = document.getElementById('num-of-people');
    if (checkBox.checked === true) {
      numPeople.style.display = 'block';
    } else {
      numPeople.style.display = 'none';
    }
  };

  document.getElementById('split-check').onclick = function () {
    showBox();
  };

  //Check to see if this input is empty or less than or equal to 1 in order to show the word "each" if the bill is being split.
  if (numPeople === '' || numPeople <= 1) {
    numPeople = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  //Calculate tip
  const tipTotal = (bill * tipAmount) / numPeople;
  //Round to two decimal places
  tipTotal = Math.round(tipTotal * 100) / 100;
  //Always have two digits after decimal point
  tipTotal = tipTotal.toFixed(2);
  //Display the tip
  document.getElementById('tip-total').style.display = 'block';
  document.getElementById('tip').innerHTML = tipTotal;

  //Hide the tip amount on load
  document.getElementById('tip-total').style.display = 'none';
  document.getElementById('each').style.display = 'none';

  //Click to call function
  document.getElementById('calculate-tip').onclick = function () {
    calculateTip();
  };
};
