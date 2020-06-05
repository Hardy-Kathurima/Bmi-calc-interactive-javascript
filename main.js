// getting inputs
const inputs = document.querySelectorAll("input");
const form = document.getElementById("bmi-calc");
const output = document.querySelector(".bmi");
const status = document.querySelector(".status");
const remedy = document.querySelector(".remedy");
const recommendations = document.querySelector(".recommendations");

// using regex to validate user input
const patterns = {
  height: /^[1-2]{1}\.[0-9]{2}$/,
  weight: /^\d{2,3}$/,
};
// validation function
function validate(field, regex) {
  console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
    $(".btn-dark").prop("disabled", false);
  } else {
    field.className = "invalid";
    $(".btn-dark").prop("disabled", true);
  }
}
// looping through user input and grabbing each

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
// adding an event listener wen a user submits the form
form.addEventListener("submit", calcBmi);
// function to calculate the bmi on submit
function calcBmi(e) {
  e.preventDefault();
  //console.log(2);

  // get input value
  var inputWeight = document.getElementById("std-weight").value;
  var inputHeight = document.getElementById("std-height").value;
  // squaring the input to use in calculating bmi
  function squareHeight(heightA) {
    return heightA ** 2;
  }
  var newHeight = squareHeight(inputHeight);
  // actual calculation function
  function calculateBmi(weightBmi, heightBmi) {
    return weightBmi / heightBmi;
  }
  var actualBmi = calculateBmi(inputWeight, newHeight);
  // changing inner text of the paragraph and converting into 1dp
  output.innerText = ` Your bmi is : ${actualBmi.toFixed(1)}`;
  // conditional statements to display on submit
  if (actualBmi > 25) {
    status.innerText = "You are overweight";
    status.style.color = "red";
    remedy.innerText = "Recommendation";
    recommendations.innerText =
      "Make sure that you eat well,get enough sleep and exercise.";
  } else if (actualBmi > 0 & actualBmi < 25 & actualBmi >= 18) {
    status.innerText = " Congrats!! You are in good shape";
    status.style.color = "green";
    status.style.padding = "5px";
    recommendations.innerText = "Make sure that you maintain the good shape.";
  } else if (actualBmi < 18) {
    status.innerText = " Your are underweight";
    status.style.color = "red";
    recommendations.innerText =
      "Make sure that you eat well,get enough sleep and exercise.";

  }
}