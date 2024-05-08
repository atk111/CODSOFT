let output = "";

function display(value) {
  output += value;
  document.getElementById("result").value = output;
}

function clearScreen() {
  output = "";
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    let result = eval(output);
    output = result.toString();
    document.getElementById("result").value = output;
  } catch (error) {
    alert("Error!");
    output = "";
    document.getElementById("result").value = "";
  }
}