const output = document.querySelector('.output');
const userInput = document.getElementById('input-int');

function getMultiples(inInt) {
  if (inInt < 0) return 0;

  let result = {
    sum: 0,
    multiples: [] //just for show
  };

  for (let i = 0; i < inInt; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i > 0) result.multiples.push(i);
      result.sum += i;
    }
  }

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
    `<p>Multiples of 3 or 5 below ${userInput.value} are: ${result.multiples}</p>
    <p>They add up to: ${result.sum}</p>
    `;
  }
}

function startOver() {
  //clear input box and displayed output
  userInput.value = '';
  output.innerHTML = '';
}
