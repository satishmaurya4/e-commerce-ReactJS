import React from 'react'
import './Profile.css'
import { useProviderValue } from '../../context'
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { getFormValues:{username, email,contactNo}, showProfileContent, setShowProfileContent,setShowProfile } = useProviderValue();
  console.log('form values', username, email, contactNo)
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/signup')
    setShowProfile(false)
  }

  const handleSignOut = () => {
    setShowProfileContent(false);
    setShowProfile(false);
    navigate('/signup')
  }

  // const tempFormValues = { ...formValues };
  // const { username, email, contactNo } = tempFormValues;

  return (
    <div className='profile-container'>
      {
        !showProfileContent ? (<>
          Please do sign up!
          <button onClick={handleProfile} className='signup-btn'>Sign up</button>
        </>) : (
            <div className="profile-content">
            <div className='profile-content-text'><span>Username:</span><span>{username}</span></div>
            <div className='profile-content-text'><span>Email:</span><span>{email}</span></div>
              <div className='profile-content-text'><span>Contact No:</span><span>{contactNo}</span></div>
              <button onClick={handleSignOut} className='signup-btn'>Sign Out</button>
        </div>
        )
      }
          
    </div>
  )
}

export default Profile