const counterLbl = document.createElement("div");
const counterBtn = document.createElement("button");

let count = 0;

counterLbl.innerText = `Counter is ${count}`;
counterBtn.innerText = `Count`;

counterBtn.onclick = () => {
  count++; 
  counterLbl.innerText = `Counter is ${count}`;
}

// class solution

// function setCounter() {
//  counter++;
//  console.log(counter);
//  counterLbl.innerText = `Counter is ${count}`;
// }
// counterBtn.addEventListener("click", setCounter);


document.querySelector('#app').appendChild(counterLbl);
document.querySelector('#app').appendChild(counterBtn);



