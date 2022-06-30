import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Google from '../../assets/google.jpg';
import './signin.css';
import { userSignin } from '../../service/userservice'


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn() {
    /* const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); */
    const [signinObj, setSigninObj] = React.useState({email: '', password: ''});
    const [regexObj, setRegexObj] = React.useState({emailBorder: false, emailHelper: '',passwordBorder: false, passwordHelper: ''});

    const getEmail = (event) => {
        setSigninObj((prevState) => ({...prevState,email: event.target.value}));
    }

    const getPassword = (event) => {
        setSigninObj((prevState) => ({...prevState,password: event.target.value}));
    }

    const testUserDetails = () => {
        /* console.log(signinObj.email, signinObj.password); */
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);
        if(emailTest === false) {
            setRegexObj((prevState) => ({...prevState,emailBorder:true,emailHelper: 'Enter valid email'}));
        }else if(emailTest === true) {
            setRegexObj((prevState) => ({...prevState,emailBorder:false,emailHelper: ''}));
        }

        if(passwordTest === false) {
            setRegexObj((prevState) => ({...prevState,passwordBorder:true,passwordHelper: 'Enter valid password'}));
        }else if(passwordTest === true) {
            setRegexObj((prevState) => ({...prevState,passwordBorder:false,passwordHelper: ''}));
        }

        if(emailTest === true && passwordTest === true) {
            userSignin(signinObj).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.data);
            })
        }
    }
    return(
        <div className="full-signin-page">
            <div className="signin-page-container">
                <div className="head-container">
                    <div className="google-word-container">
                        <div style={{color: '#4285f4'}}>G</div>
                        <div style={{color: 'red'}}>o</div>
                        <div style={{color: 'yellow'}}>o</div>
                        <div style={{color: '#4285f4'}}>g</div>
                        <div style={{color: 'green'}}>l</div>
                        <div style={{color: 'red'}}>e</div>
                    </div>
                    <div className="signin-word-container">Sign in</div>
                    <div className="template-container">Use your Google Account</div>
                </div>
                <div className="input-container">
                    <TextField id="outlined-basic" label="Email or phone" variant="outlined" size="small" 
                    error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={getEmail} />
                    <div className="forgot-button-container">
                        <button className="forgot-button">Forgot email?</button>
                    </div>
                </div>
                <div className="input-container">
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" 
                    error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={getPassword} />
                    <div className="forgot-button-container">
                        <div className="forgot-button">Forgot password?</div>
                    </div>
                </div>
                <div className="instruction-container">
                    <div>Not your computer? Use Guest mode to sign in privately.</div>
                    <div>
                        <button className="more-button-container">Learn more</button>
                    </div>
                </div>
                <div className="options-container">
                    <button className="create-option">Create account</button>
                    <Button size="small" variant="contained" className="next-container" onClick={testUserDetails}>Next</Button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;