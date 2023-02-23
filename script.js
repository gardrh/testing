const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const filterSelect = document.getElementById("filter-select");
const resultContainer = document.getElementById("result-container");
let data = [];

function generateRandomResult() {
  var filter = document.getElementById("filter-select").value;
  var filteredData = data;
  if (filter !== "") {
    filteredData = data.filter(function (row) {
      return row.Type === filter;
    });
  }
  var randomIndex = Math.floor(Math.random() * filteredData.length);
  var randomItem = filteredData[randomIndex];
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = randomItem.Name;
}

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
