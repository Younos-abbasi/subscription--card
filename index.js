const mySubmit = document.getElementById("mySubmit");
const myCheckBox = document.getElementById("myCheckBox");
const myVisaBtn = document.getElementById("myVisaBtn");
const myMasterBtn = document.getElementById("myMasterBtn");
const myPayPalBtn = document.getElementById("myPayPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = () => {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    myCheckBox.textContent = `You are not subscribed`;
  }
  if (myVisaBtn.checked) {
    paymentResult.textContent = `You are paying with visa`;
  } else if (myMasterBtn.checked) {
    paymentResult.textContent = `You are paying with Master`;
  } else if (myPayPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `Please select a payment method!`;
  }
};
