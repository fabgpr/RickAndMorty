const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/gm;

const validation = ({ email, password }) => {
  const errors = {};

  if (email.length === 0) {
    errors.email = "Este campo no puede estar vacio";
  } else if (!regexEmail.test(email)) {
    errors.email = "Porfavor inserte un Email";
  }
  if (!regexPassword.test(password)) {
    errors.password =
      "La contraseña tiene que tener al menos, entre 6 y 10 caracteres, una mayuscula, una minuscula, y un numero";
  }
  return errors;
};

export default validation;
