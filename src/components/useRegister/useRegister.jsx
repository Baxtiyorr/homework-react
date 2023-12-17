import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    firstName: "",
    email: "",
    password: "",
    logIn: "",
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValid =
      firstName && validateEmail(email) && validatePassword(password);

    if (!formValid) {
      setError({
        firstName: firstName ? "" : "FirstName is required >:(",
        email: validateEmail(email) ? "" : "Invalid email address >:(",
        password: validatePassword(password)
          ? ""
          : "At least your password must contain 6 characters >:(",
      });
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate("/");
    console.log("submitted");
  };

  return {
    firstName,
    email,
    password,
    error,
    handleFirstNameChange: (event) => {
      setFirstName(event.target.value);
      setError({ ...error, firstName: "" });
    },
    handleEmailChange: (event) => {
      setEmail(event.target.value);
      setError({ ...error, email: "" });
    },
    handlePasswordChange: (event) => {
      setPassword(event.target.value);
      setError({ ...error, password: "" });
    },
    handleSubmit,
  };
};

export default useRegister;