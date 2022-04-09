import React,{useState} from 'react'
import './SignupInput.css'

const SignupInput = (props) => {
  const [focused, setFocused] = useState(false);
    const { label, inputHandler, id, errorMessage, ...inputProps } = props;
    
    const handleFocus = () => {
        setFocused(true)
    }

  return (
    <div className='input-container'>
    <div className='input-control'>
      
          <input className='input' {...inputProps} placeholder=" " onChange={inputHandler} onBlur={handleFocus} onFocus={()=> inputProps.name === "confirmPassword" && setFocused(true)} focused={focused.toString()}  />
        <label className='label'>{label}</label>
          <span className='error-message'>{errorMessage}</span>
        </div>
    </div>
  )
}

export default SignupInput