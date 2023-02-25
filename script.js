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


// Fetch the data.csv file
fetch('data.csv')
  .then(response => response.text())
  .then(data => {
    // Split the data into an array of rows
    const rows = data.trim().split('\n');
    // Count the number of rows (subtracting 1 for the header row)
    const count = rows.length - 1;
    // Update the dinner-count element with the count
    const dinnerCountElement = document.getElementById('dinner-count');
    dinnerCountElement.textContent = `There are ${count} dinners to choose from.`;
  })
  .catch(error => console.error(error));
