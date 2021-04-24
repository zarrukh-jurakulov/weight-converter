let message = ""
let pound = 0.45
let poundInput = document.getElementById("poundQuantityInput").value;
let calculate = poundInput * pound;
document.getElementById("weightInKg").innerHTML = "Your weight in Kilograms is: " + calculate + " kg"

function calculateButton() {
 if (poundInput.length === 0) {
  message = "Please Enter your value number"
 } else {
  message = " "
 }
 document.getElementById("errorMessage").innerHTML = message
}
