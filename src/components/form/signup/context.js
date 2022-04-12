import { createContext, useState,useContext } from "react";

const SignUpContext = createContext();

const SignUpProvider = ({ children }) => {
    const initialState = {
        username: "",
        email: "",
        contactNo: "",
        password: "",
        confirmPassword: "",
      };
      const [formValues, setFormValues] = useState(initialState);
      const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [getFormValues, setGetFormValues] = useState({});
    return (
        <SignUpContext.Provider value={{formValues,formErrors,isSubmit,setFormErrors,setFormValues,setIsSubmit,getFormValues, setGetFormValues}}>
            {children}
        </SignUpContext.Provider>
    )
}

export default SignUpProvider;

export const useSignUpProviderValue = () => useContext(SignUpContext);