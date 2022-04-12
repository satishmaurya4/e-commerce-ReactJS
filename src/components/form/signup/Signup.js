import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProviderValue } from "../../../context";
import { useSignUpProviderValue } from "./context";
import "./Signup.css";

const Signup = () => {
  const {
    formValues,
    formErrors,
    isSubmit,
    setFormErrors,
    setFormValues,
    setIsSubmit,
    setGetFormValues,
  } = useSignUpProviderValue();
  const { setShowProfileContent } = useProviderValue();

  const { username, email, contactNo, password, confirmPassword } = formValues;

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(doVaildate(formValues));
    setIsSubmit(true);
  };

  const inputHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("useEffect form values", formValues);
      setGetFormValues({ ...formValues });
      setFormValues({
        username: "",
        email: "",
        contactNo: "",
        password: "",
        confirmPassword: "",
      });
      setShowProfileContent(true);
      navigate("/");
    }
  }, [formErrors]);

  const doVaildate = (values) => {
    let isValid = true;
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
      // isValid = false;
    }
    if (values.username !== "") {
      let regex = /^[a-zA-Z0-9_\.]{6,16}$/;
      if (!regex.test(values.username)) {
        errors.username =
          "Username must contains 6-16 characters and only '_' is valid!";
        // isValid = false;
      }
    }
    if (!values.email) {
      errors.email = "Email is required";
      isValid = false;
    }
    if (values.email !== "") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(values.email)) {
        errors.email = "Email format is not valid!";
        // isValid = false;
      }
    }

    if (!values.contactNo) {
      errors.contactNo = "Contact number is required";
      // isValid = false;
    }
    if (values.email !== "") {
      let regex = /^[7-9][0-9]{9}$/;
      if (!regex.test(values.contactNo)) {
        errors.contactNo =
          "Contact number must start with 7 digit and contains 10 digit!";
        // isValid = false;
      }
    }
    if (!values.password) {
      errors.password = "Password is required";
      // isValid = false;
    }
    if (values.password !== "") {
      let regex =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}/;
      if (!regex.test(values.password)) {
        errors.password = "Password must contains aA^ and 8-20 characters!";
        // isValid = false;
      }
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
      // isValid = false;
    }
    if (values.password !== "") {
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Confirm password must match with password!";
        // isValid = false;
      }
    }

    return errors;
  };

  return (
    <div className="signup-container">
      <Link to="/" className="signup-logo">
        eShop
      </Link>
      <div className="signup-form-container">
        <h4 className="signup-title">Signup</h4>
        <form className="signup-form" onSubmit={submitHandler}>
          <div className="input-container">
            <div className="input-control">
              <input
                className="input"
                type="text"
                name="username"
                placeholder=" "
                onChange={inputHandler}
                value={username}
              />
              <label className="label">username</label>
            </div>
            <p>{formErrors.username}</p>
          </div>
          <div className="input-container">
            <div className="input-control">
              <input
                className="input"
                type="text"
                name="email"
                placeholder=" "
                value={email}
                onChange={inputHandler}
              />
              <label className="label">email</label>
            </div>
            <p>{formErrors.email}</p>
          </div>
          <div className="input-container">
            <div className="input-control">
              <input
                className="input"
                type="tel"
                name="contactNo"
                placeholder=" "
                value={contactNo}
                onChange={inputHandler}
              />
              <label className="label">contact number</label>
            </div>
            <p>{formErrors.contactNo}</p>
          </div>
          <div className="input-container">
            <div className="input-control">
              <input
                className="input"
                type="password"
                name="password"
                placeholder=" "
                value={password}
                onChange={inputHandler}
              />
              <label className="label">password</label>
            </div>
            <p>{formErrors.password}</p>
          </div>
          <div className="input-container">
            <div className="input-control">
              <input
                className="input"
                type="password"
                name="confirmPassword"
                placeholder=" "
                value={confirmPassword}
                onChange={inputHandler}
              />
              <label className="label">confirm password</label>
            </div>
            <p>{formErrors.confirmPassword}</p>
          </div>
          <button type="submit" className="signup-submit--btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
