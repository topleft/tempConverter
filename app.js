

function toF(degC) {
  var degF = degC * (9/5) + 32;
  return degF;
};

function toC(degF) {
  var degC = (degF - 32) * (5/9);
  return degC;
};

console.log(toF(30));
console.log(toC(toF(30)));


$(document).ready( function() {

  // promt user for conversion choice (to C or to F?) and check for validity
  var userChoice = prompt("Convert to F or C? (f/c): ");
  userChoice = userChoice.toLowerCase()
  console.log(typeof(userChoice));
  if (userChoice != "c" && userChoice != "f") {
    userChoice = prompt("Try again, C or F please.\nConvert to F or C? (f/c): ");
  };

  // then prompt for temp and check to be sure it is valid
  var userTemp = prompt("Please enter a temperature: ");
  userTemp = parseInt(userTemp);
  console.log(typeof(userTemp));
  if ( (typeof userTemp) != 'number') {
    userTemp = prompt("Try again, numbers only plaese.\nEnter a temperature: ");
  };
  userTemp = parseInt(userTemp);
  console.log("in doc ready");
  console.log(toF(userTemp));
  console.log(toC(toF(userTemp)));


  // return temp in massive font in HTML
  if (userChoice === "c") {
    var result = toC(userTemp);
    result = result.toFixed(2);
    $(document).find("h2").append(result+" &deg;C");
  }
  else {
    var result = toF(userTemp);
    result = result.toFixed(2);
    $(document).find("h2").append(result+" &deg;F");
  }

});
