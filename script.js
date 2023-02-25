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


function countRows() {
  fetch('data.csv')
    .then(response => response.text())
    .then(text => {
      const row_count = text.trim().split('\n').length;
      const dinner_count_element = document.getElementById('dinner-count');
      dinner_count_element.innerText = `Antall middager: ${row_count}`;
    })
    .catch(error => console.log(error));
}
