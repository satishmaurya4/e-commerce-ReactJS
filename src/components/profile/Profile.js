import React from "react";
import "./Profile.css";
import { useProviderValue } from "../../context";
import { useNavigate } from "react-router-dom";
import { useSignUpProviderValue } from "../form/signup/context";

const Profile = () => {
  const {
    showProfileContent,
    setShowProfileContent,
    setShowProfile,
  } = useProviderValue();
  const { getFormValues:{ username, email, contactNo }, setIsSubmit } = useSignUpProviderValue();
  console.log("form values", username, email, contactNo);
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/signup");
    setShowProfile(false);
  };

  const handleSignOut = () => {
    setShowProfileContent(false);
    setShowProfile(false);
    setIsSubmit(false)
    navigate("/signup");
  };

  return (
    <div className="profile-container">
      {!showProfileContent ? (
        <>
          Please do sign up!
          <button onClick={handleProfile} className="signup-btn">
            Sign up
          </button>
        </>
      ) : (
        <div className="profile-content">
          <div className="profile-content-text">
            <span>Username:</span>
            <span>{username}</span>
          </div>
          <div className="profile-content-text">
            <span>Email:</span>
            <span>{email}</span>
          </div>
          <div className="profile-content-text">
            <span>Contact No:</span>
            <span>{contactNo}</span>
          </div>
          <button onClick={handleSignOut} className="signup-btn">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
