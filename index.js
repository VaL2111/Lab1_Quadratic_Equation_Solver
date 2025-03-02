const equationForm = document.getElementById("equationForm");
const resultDiv = document.getElementById("result");

equationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  solveEquation(a, b, c);
});

function solveEquation(a, b, c) {
  if (a === 0) {
    showResult(false, "Error. a cannot be 0");
    return;
  }

  const discriminant = b * b - 4 * a * c;
  let result;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    result = `
			There are 2 roots
			<br>x1 = ${x1.toFixed(2)}
			<br>x2 = ${x2.toFixed(2)}
		`;
  } else if (discriminant === 0) {
    const x = -b / (2 * a);

    result = `
			There are 1 root
			<br>x = ${x.toFixed(2)}
		`;
  } else {
    result = "There are 0 roots";
  }

  const equationStr = `
		(${a.toFixed(1)}) x^2 + (${b.toFixed(1)}) x + (${c.toFixed(1)}) = 0
	`;

  showResult(`${equationStr}<br><br>${result}`, false);
}

function showResult(resultMessage, errorMessage) {
  if (errorMessage) {
    resultDiv.innerHTML = `<p>${errorMessage}</p>`;
  } else {
    resultDiv.innerHTML = `<p>${resultMessage}</p>`;
  }
}
