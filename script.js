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


// Load the data from the CSV file
d3.csv("data.csv").then(function(data) {
  // Calculate the total number of dinners
  var dinnerCount = 0;
  data.forEach(function(row) {
    dinnerCount += parseInt(row.Antall);
  });

  // Update the element with the dinner count
  var dinnerCountElement = document.getElementById("dinner-count");
  dinnerCountElement.innerHTML = "Total number of dinners: " + dinnerCount;
});

