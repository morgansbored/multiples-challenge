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
  if (userInput.value === '') {
    alert('Please enter a positive integer');
    return;
  }
  if (userInput.value === '0') {
    startOver();
    return;
  }
  const result = getMultiples(userInput.value);
  output.innerHTML = '';
  output.innerHTML = `<h3>You input the number <b>${userInput.value}</b></h3>`;
  if (result === 0) {
    output.innerHTML += 
    `<p>The result is: ${result}</p>`;
  }
  else {
    output.innerHTML += `<p>The multiples of 3 or 5 below ${userInput.value} are:</p>`;
    let list = document.createElement('p');
    for (let i = 0; i < result.multiples.length; i++) {
      if (result.multiples[i] % 3 === 0 && result.multiples[i] % 5 === 0)
      {
        list.innerHTML += `<span class="common">${result.multiples[i]}</span>`;
      }
      else {
        list.innerHTML += result.multiples[i];
      }
      if (i != result.multiples.length - 1) {
        list.innerHTML += `, `;
      }
    }
    output.appendChild(list);
    output.innerHTML += `<p>(any numbers in <span class="common">red</span> are multiples of <b>both</b> 3 and 5)</p>`;
    output.innerHTML += `<h3>They add up to <b>${result.sum}</h3>`;
  }
}

function startOver() {
  //clear input box and displayed output
  userInput.value = '';
  output.innerHTML = '<h3>Output will appear here...</h3>';
}

function isNumber(e){
  e = e || window.event;
  var charCode = e.which ? e.which : e.keyCode;
  return /\d/.test(String.fromCharCode(charCode));
}