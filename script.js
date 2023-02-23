const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const filterSelect = document.getElementById("filter-select");
const resultContainer = document.getElementById("result-container");
let data = [];

function generateRandomResult() {
  let filteredData = data;
  if (filterSelect.value !== "") {
    filteredData = data.filter(option => option.variable === filterSelect.value);
  }
  const randomIndex = Math.floor(Math.random() * filteredData.length);
  resultContainer.textContent = filteredData[randomIndex].name;
}

function resetResult() {
  resultContainer.textContent = "";
}

generateBtn.addEventListener("click", generateRandomResult);
resetBtn.addEventListener("click", resetResult);
filterSelect.addEventListener("change", generateRandomResult);

fetch("data.csv")
  .then(response => response.text())
  .then(data => {
    const rows = data.trim().split('\n');
    const headers = rows.shift().split(',');
    data = rows.map(row => {
      const values = row.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
  })
  .catch(error => console.log(error));
