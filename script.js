let roundCounter = 0;

function generatePrediction() {
  roundCounter++;
  
  // Simulate a "prediction" (not real-world accurate)
  const simulatedPrediction = (Math.random() * 10 + 1).toFixed(2);
  const simulatedActual = (Math.random() * 10 + 1).toFixed(2);

  // Update prediction display
  document.getElementById('predictionValue').textContent = `${simulatedPrediction}x`;

  // Update history table
  const historyTable = document.getElementById('roundHistory');
  const newRow = historyTable.insertRow(0);
  newRow.innerHTML = `
    <td>${roundCounter}</td>
    <td>${simulatedPrediction}x</td>
    <td>${simulatedActual}x</td>
  `;
}
