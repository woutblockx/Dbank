import { Dbank } from "../../declarations/Dbank";

// displays the current value
window.addEventListener("load", async function() {
  const currentAmount = await Dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

//top up and withdraw functionality
document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0){
    await Dbank.topUp(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await Dbank.withdraw(outputAmount);
  }

  const currentAmount = await Dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
})