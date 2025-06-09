const form = document.getElementById("form");
let email = document.getElementById("email");
let errorspan = document.querySelector(".error-span");
let main = document.querySelector("main");
let useremail = document.getElementById("user-email");
let successmessage = document.querySelector(".success-message");
let leavebtn = document.querySelector(".leave");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(email.value.trim())) {
    email.classList.add("error");
    errorspan.classList.add("active");
    return;
  }
  useremail.innerHTML = email.value;
  successmessage.classList.add("active");
  main.classList.add("active");
});

email.addEventListener("input", () => {
  email.classList.remove("error");
  errorspan.classList.remove("active");
});

leavebtn.addEventListener("click", (e) => {
  e.preventDefault();
  successmessage.classList.remove("active");
  main.classList.remove("active");
  form.reset();
});
