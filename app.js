const form = document.querySelector("#create-account-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", event => {

 validateForm();

 if(isFormValid() === true){
  form.submit();
 }else{
  event.preventDefault()
 }
});

function isFormValid() {
 const inputContainers = document.querySelectorAll('.input-group');
 let result = true;

 inputContainers.forEach(container => {
  if(container.classList.contains("error")){
   result = false;
  }
 });

 return result;
}

function validateForm() {
 //USERNAME
 if(usernameInput.value.trim() === ''){
  setError(usernameInput, "Name cannot be empty");
 }else if(usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 20){
  setError(usernameInput, "Name must be min of 5 and max of 15 characters")
 }else{
  setSuccess(usernameInput);
 }

 //EMAIL
 if(emailInput.value.trim() === ""){
  setError(emailInput, "Provide email address");
 }else if(isEmailValid(emailInput.value)){
  setSuccess(emailInput);
 }else{
  setError(emailInput, "Provide a valid email address");
 }

 //PASSWORD
 if(passwordInput.value.trim() === ""){
  setError(passwordInput, "Password cannot be empty");
 }else if(passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20){
  setError(passwordInput, "Password must be a min of 6 and a max of 20 characters");
 }else{
  setSuccess(passwordInput);
 }

 //CONFIRM PASSWORD
 if(confirmPasswordInput.value.trim() === ""){
  setError(confirmPasswordInput, "Password cannot be empty");
 }else if(confirmPasswordInput.value !== passwordInput.value){
  setError(confirmPasswordInput, "Password does not match");
 }else{
  setSuccess(confirmPasswordInput);
 }
}

function setError(element, errorMessage){
 const parent = element.parentElement;
 if(parent.classList.contains("success")){
  parent.classList.remove("success");
 }
 parent.classList.add("error");
 const paragraph = parent.querySelector("p");
 paragraph.textContent = errorMessage;
}

function setSuccess(element) {
 const parent = element.parentElement;
 if(parent.classList.contains("error")){
  parent.classList.remove("error");
 }
 parent.classList.add("success");
}

function isEmailValid(email) {
 reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 return reg.test(email);
}