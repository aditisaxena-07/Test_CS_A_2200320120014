async function getData() {
  const data = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const value = await data.json();
  console.log(value.rates);
  const arr = Object.keys(value.rates);
  arr.forEach((val) => {
    const options = document.createElement("option");
    options.innerText = val;
    select1.appendChild(options);
  });
  arr.forEach((val) => {
    const options = document.createElement("option");
    options.innerText = val;
    select2.appendChild(options);
  });
  const convert = (am1, am2, curr1, curr2) => {
    console.log(am1 * value.rates[curr2]);
    return am1 * value.rates[curr2];
  };
  const button = document.querySelector(".submit");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const amount1 = document.querySelector("#amount").value;
    const amount2 = document.querySelector("#Convert").value;
    const curr1 = select1.value;
    const curr2 = select2.value;
    const convertedCurr = convert(amount1, amount2, curr1, curr2);
    const outputBox = document.querySelector("#Convert");
    console.log(outputBox);
    outputBox.innerHTML = convertedCurr;
  });
}
const select1 = document.querySelector(".option1");
const select2 = document.querySelector(".option2");

getData();
