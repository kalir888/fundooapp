import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './signup.css';
import Account from '../../assets/account.svg';
import { userSignup } from "../../service/userservice";
import { useHistory } from "react-router-dom";

const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp() {
    let history = useHistory();
    const [signupObj, setSignupObj] = React.useState({firstName: '', lastName: '', email: '', password: ''});
    const [regexObj, setRegexObj] = React.useState({firstNameBorder: false, firstNameHelper: '', 
                                                    lastNameBorder: false, lastNameHelper: '',
                                                    emailBorder: false, emailHelper: 'You can use letters, numbers & periods',
                                                    passwordBorder: false, passwordHelper: '',
                                                    conPasswordBorder: false, conPasswordHelper: ''});
    const [conPassword, setConPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const getFirstName = (event) => {
        setSignupObj((prevState) => ({...prevState,firstName: event.target.value}));
    }

    const getLastName = (event) => {
        setSignupObj((prevState) => ({...prevState,lastName: event.target.value}));
    }

    const getEmail = (event) => {
        let preEmail = event.target.value;
        let realEmail = preEmail.concat('@gmail.com');
        setSignupObj((prevState) => ({...prevState,email: realEmail}));
    }

    const getPassword = (event) => {
        setSignupObj((prevState) => ({...prevState,password: event.target.value}));
    }

    const getConPassword = (event) => {
        setConPassword(event.target.value);
    }

    const goToSigninPage = () => {
        history.push('/Signin');
    }

    const testUserDetails = () => {
        let firstNameTest = firstNameRegex.test(signupObj.firstName);
        let lastNameTest = lastNameRegex.test(signupObj.lastName);
        let emailTest = emailRegex.test(signupObj.email);
        let passwordTest = passwordRegex.test(signupObj.password);
        let conPasswordTest = (signupObj.password === conPassword);

        if(firstNameTest === false) {
            setRegexObj((prevState) => ({...prevState,firstNameBorder:true,firstNameHelper: 'Enter valid FirstName'}));
        }else if(firstNameTest === true) {
            setRegexObj((prevState) => ({...prevState,firstNameBorder:false,firstNameHelper: ''}));
        }

        if(lastNameTest === false) {
            setRegexObj((prevState) => ({...prevState,lastNameBorder:true,lastNameHelper: 'Enter valid LastName'}));
        }else if(lastNameTest === true) {
            setRegexObj((prevState) => ({...prevState,lastNameBorder:false,lastNameHelper: ''}));
        }

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

        if(conPasswordTest === false) {
            setRegexObj((prevState) => ({...prevState,conPasswordBorder:true,conPasswordHelper: 'password not match'}));
        }else if(passwordTest === true) {
            setRegexObj((prevState) => ({...prevState,conPasswordBorder:false,conPasswordHelper: ''}));
        }

        if(firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true && conPasswordTest === true) {
            userSignup(signupObj).then((response) => {
                console.log(response);
                goToSigninPage();
            }).catch((error) => console.log(error));
        }
    }

    return(
        <div className="whole-page-container">
            <div className="signup-page-container">
                <div className="signup-form-container">
                    <div className="head-form-container">
                        <div className="googleone-word-container">
                            <div style={{color: '#4285f4'}}>G</div>
                            <div style={{color: 'red'}}>o</div>
                            <div style={{color: 'yellow'}}>o</div>
                            <div style={{color: '#4285f4'}}>g</div>
                            <div style={{color: 'green'}}>l</div>
                            <div style={{color: 'red'}}>e</div>
                        </div>
                        <span className="templateone-container">Create your Google Account</span>
                    </div>
                    <div className="name-form-container">
                        <TextField id="outlined-basic" label="First name" variant="outlined" size="small" className="name-container" 
                        error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} onChange={getFirstName}/>
                        <TextField id="outlined-basic" label="Last name" variant="outlined" size="small" className="name-container"
                        error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} onChange={getLastName}/>
                    </div>
                    <div className="user-name-container">
                        <TextField id="outlined-basic" label="Username" variant="outlined" size="small" className="user-name-content"
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>@gmail.com</InputAdornment>
                        }} error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={getEmail}/>
                    </div>
                    <div className="button-container">
                        <Button size='small'><span style={{textTransform: 'none', fontWeight: 700}}>Use my current email address instead</span></Button>
                    </div>
                    <div className="password-form-container">
                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" className="name-container"
                        error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={getPassword}
                        type={showPassword ? 'text' : 'password'}/>
                        <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small" className="name-container"
                        error={regexObj.conPasswordBorder} helperText={regexObj.conPasswordHelper} onChange={getConPassword}
                        type={showPassword ? 'text' : 'password'}/>
                    </div>
                    <div className="helper-text-container"> 
                        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                    </div>
                    <div className="check-box-container">
                        <FormControlLabel control={<Checkbox onChange={() => setShowPassword(!showPassword)}/>} label="Show password" />
                    </div>
                    <div className="last-option-container">
                        <Button size='small' onClick={goToSigninPage}><span style={{textTransform: 'none', fontWeight: 700}}>Sign in instead</span></Button>
                        <Button size="small" variant="contained" onClick={testUserDetails}><span style={{textTransform: 'none', fontWeight: 700}}>Next</span></Button>
                    </div>
                </div>
                <div className="right-container">
                    <img src={Account} alt="Account" className="account-image-container" />
                    <div className="advertisement-container">One account. All of Google working for you.</div>
                </div>
            </div>
        </div>
        
    )
}
 
export default SignUp;