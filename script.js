const generateBtn = document.getElementById("generate-btn");
const resultDiv = document.querySelector(".result");

generateBtn.addEventListener("click", () => {
  fetch("data.csv")
    .then(response => response.text())
    .then(text => {
      const data = text.trim().split("\n").map(row => row.split(","));
      const headers = data.shift();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomRow = data[randomIndex];
      const resultHTML = headers.map((header, index) => `<p><strong>${header}:</strong> ${randomRow[index]}</p>`).join("");
      resultDiv.innerHTML = resultHTML;
    })
    .catch(error => console.error(error));
});


  function getResult(numRows) {
    const numRowsElement = document.getElementById('num-rows');
    numRowsElement.textContent = `Number of rows: ${numRows}`;
  }

  const countButton = document.getElementById('count-button');
  countButton.addEventListener('click', () => {
    fetch('data.csv')
      .then(response => response.text())
      .then(csvData => {
        const rows = csvData.split('\n');
        const numRows = rows.length;
        getResult(numRows);
      })
      .catch(error => console.error(error));
  });
