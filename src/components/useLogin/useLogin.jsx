import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "../Profile";

const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    logIn: "",
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValid = validateEmail(email) && validatePassword(password);

    if (!formValid) {
      setError({
        email: validateEmail(email) ? "" : "Invalid email address >:(",
        password: validatePassword(password)
          ? ""
          : "At least your password must contain 6 characters >:(",
      });
      return;
    }

    // Здесь вы можете добавить логику для проверки правильности email и password
    // и выполнить соответствующие действия, например, перенаправление пользователя.
        const registeredEmail= localStorage.getItem('email')
        const registeredPassword= localStorage.getItem('password')
    // Пример:
     if (email === registeredEmail && password === registeredPassword) {
       navigate('/profile')
     } else {
       setError({ ...error, logIn: 'Invalid email or password' });
     }

    console.log("submitted");
  };

  return {
    email,
    password,
    error,
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

export default useLogin;