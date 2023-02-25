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


  const countButton = document.getElementById('count-button');
  countButton.addEventListener('click', () => {
    fetch('data.csv')
      .then(response => response.text())
      .then(csvData => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        const numRows = parsedData.length;
        const numRowsElement = document.getElementById('num-rows');
        numRowsElement.textContent = `Number of rows: ${numRows}`;
      })
      .catch(error => console.error(error));
  });
