const output = document.querySelector('.output');
const userInput = document.getElementById('input-int');

function getMultiples(inInt) {
  //...
  return result;
}

function showResults() {
  const result = getMultiples(userInput.value);
  output.innerHTML = 
    `<p>You input the number ${userInput.value}</p>`;
  if (result === 0) {
    output.innerHTML += 
    `<p>The result is: ${result}</p>
    `;
  } else {
    output.innerHTML += 
    `<p>Multiples of 3 or 5 below ${userInput.value} are:</p>
    <p>They add up to: ${result}</p>
    `;
  }
}

function startOver() {
  userInput.value = '';
  output.innerHTML = '';
}
