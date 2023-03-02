const password = "12345";
const redirectUrl = "tropa.html";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  
  const passwordInput = document.querySelector("#password");
  const enteredPassword = passwordInput.value;
  
  if (enteredPassword === password) {
    window.location.href = redirectUrl;
  } else {
    alert("Senha incorreta. Tente novamente.");
    passwordInput.value = "";
  }
});
