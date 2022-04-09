import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProviderValue } from "../../../context";
import "./Signup.css";
import SignupInput from "./SignupInput";

const Signup = () => {
  const {
    formData,
    formValues,
    setFormValues,
    setShowProfileContent,
    setGetFormValues,
  } = useProviderValue();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit handler called");
    setShowProfileContent(true);
    setFormValues({
      username: "",
      email: "",
      contactNo: "",
      password: "",
      cofirmPassword: "",
    });
    setGetFormValues({ ...formValues });
    navigate("/");
  };

  const inputHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <Link to="/" className="signup-logo">
        eShop
      </Link>
      <div className="signup-form-container">
        <h4 className="signup-title">Signup</h4>
        <form className="signup-form" onSubmit={submitHandler}>
          {formData.map((inputData) => {
            return (
              <SignupInput
                key={inputData.id}
                {...inputData}
                value={formValues[inputData.name]}
                inputHandler={inputHandler}
              />
            );
          })}
          <button type="submit" className="signup-submit--btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
