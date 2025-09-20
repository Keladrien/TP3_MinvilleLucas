const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("mail");
const textArea = document.getElementById("textArea");
const produit = document.getElementById("produit");
const dateLimite = document.getElementById("dateLimite");
const condition = document.getElementById("condition");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateForm = () => {
  let noError = true;
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const textAreaValue = textArea.value.trim();
  const produitValue = produit.value.trim();
  const dateLimiteValue = dateLimite.value.trim();
  const conditionValue = condition.checked;

  const isValideNames = (name) => {
    let regex = /^[a-z]+(-[a-z]+)?$/;
    return regex.test(String(name).toLowerCase());
  };

  const isValideEmail = (email) => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  };

  if (firstNameValue === "") {
    setError(firstName, "Le prénom est obligatoire");
    noError = false;
  } else if (firstNameValue.length < 2) {
    setError(firstName, "Le prénom doit avoir un minimum de 2 caractères");
    noError = false;
  } else if (!isValideNames(firstNameValue)) {
    setError(firstName, 'Le prénom ne doit contenir que des lettres ou un "-"');
    noError = false;
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Le nom est obligatoire");
    noError = false;
  } else if (lastNameValue.length < 2) {
    setError(lastName, "Le nom doit avoir un minimum de 2 caractères");
    noError = false;
  } else if (!isValideNames(lastNameValue)) {
    setError(lastName, 'Le nom ne doit contenir que des lettres ou un "-"');
    noError = false;
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Le courriel est obligatoire");
    noError = false;
  } else if (!isValideEmail(emailValue)) {
    setError(email, "Le courriel est invalide");
    noError = false;
  } else {
    setSuccess(email);
  }

  if (textAreaValue === "") {
    setError(
      textArea,
      "Veuillez entrer une courte description de votre projet"
    );
    noError = false;
  } else {
    setSuccess(textArea);
  }

  if (produitValue === "notSelected") {
    setError(produit, "Veuillez sélectionner un produit");
    noError = false;
  } else {
    setSuccess(produit);
  }

  if (dateLimiteValue === "") {
    setError(dateLimite, "Veuillez sélectionner une date");
    noError = false;
  } else {
    setSuccess(dateLimite);
  }

  if (conditionValue === false) {
    setError(condition, "Veuillez accepter les condition");
    noError = false;
  } else {
    setSuccess(condition);
  }

  console.log(produit.value);
  return noError;
};
