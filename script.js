const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const filterSelect = document.getElementById("filter-select");
const resultContainer = document.getElementById("result-container");
const data = [
  { name: "Vegetar", variable: "Vegetar" },
  { name: "Kjøtt", variable: "Kjøtt" },
  { name: "Fisk", variable: "Fisk" },

];

function generateRandomResult() {
  let filteredData = data;
  if (filterSelect.value !== "") {
    filteredData = data.filter(option => option.variable === filterSelect.value);
  }
  // code to generate random result from filteredData
    fetch("data.csv")
  resultContainer.textContent = "Random result goes here";
}

function resetResult() {
  resultContainer.textContent = "";
}

generateBtn.addEventListener("click", generateRandomResult);
resetBtn.addEventListener("click", resetResult);
filterSelect.addEventListener("change", generateRandomResult);
