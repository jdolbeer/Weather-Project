var conversionForm = document.getElementById('conversions');

//Math variables

var inches = 1;
var ounces = 1;
var miles = 1;
var pounds = 1;
var standardTon = 1;
var cent = 2.54;
var mil = 29.5735;
var kilom = 1.60934;
var kg = 0.453592;
var metricTon = 0.907185;

function handleConvert() {
  event.preventDefault();

  if(!event.target.userInput || event.target.userInput === NaN) {
    return alert('Please enter a REAL number for conversion. Thanks.');
  }

  var userInput = event.target.userInput.value;
  var conversionType = event.target.convertSelect.value;

  var result = function(userInput, conversionType) {
    if (conversionType === 'con1') {
      return (userInput.value * cent);
    } else if(conversionType === 'con2') {
      return (userInput.value / cent);
    } else if(conversionType === 'con3') {
      return (userInput.value * mil);
    } else if(conversionType === 'con4') {
      return (userInput.value / mil);
    } else if(conversionType === 'con5') {
      return (userInput.value * kilom);
    } else if(conversionType === 'con6') {
      return (userInput.value / kilom);
    } else if(conversionType === 'con7') {
      return (userInput.value * kg);
    } else if(conversionType === 'con8') {
      return (userInput.value / kg);
    } else if(conversionType === 'con9') {
      return (userInput.value * metricTon);
    } else if(conversionType === 'con10') {
      return (userInput.value / metricTon);
    }
    console.log(result);
  };
}

//event listener for submit button
conversionForm.addEventListener('submit', handleConvert);
