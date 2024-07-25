function calculate() {
  // Get input values
  var height = parseFloat(document.getElementById("height").value);
  var width = parseFloat(document.getElementById("width").value);
  var gsm = parseFloat(document.getElementById("gsm").value);
  var numberOfTons = parseFloat(document.getElementById("ton").value);
  var sheetsPerReam = parseFloat(document.getElementById("reams").value);

  // Reference to the result elements
  var resultElement = document.getElementById("result");
  var ansElement = document.getElementById("ans");

  // Check if any input value is NaN (Not a Number)
  if (
    isNaN(height) ||
    isNaN(width) ||
    isNaN(gsm) ||
    isNaN(numberOfTons) ||
    isNaN(sheetsPerReam)
  ) {
    ansElement.textContent = "enter values";
    resultElement.style.display = "block";
    return;
  }

  // Calculate area in square meters (assuming input is in inches)
  var area = (height / 39.37) * (width / 39.37);

  // Calculate weight of one sheet in grams
  var weightOfPaper = area * gsm;

  // Convert tons to grams
  var grams = numberOfTons * 1000000;

  // Calculate total number of sheets
  var totalSheets = grams / weightOfPaper;

  // Calculate reams per ton
  var reamsPerTon = totalSheets / sheetsPerReam;

  // Display result with "Reams per Ton"
  ansElement.textContent = reamsPerTon.toFixed(2) + " Reams/MT";
  resultElement.style.display = "block";
}

// Add event listeners to input fields to call calculate function on input change
document.getElementById("height").addEventListener("input", calculate);
document.getElementById("width").addEventListener("input", calculate);
document.getElementById("gsm").addEventListener("input", calculate);
document.getElementById("ton").addEventListener("input", calculate);
document.getElementById("reams").addEventListener("input", calculate);

// Initially display the result element with a default message
document.getElementById("result").style.display = "block";
document.getElementById("ans").textContent = " enter values";
