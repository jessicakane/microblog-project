import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';



export const SignUpForm = () => {

    const[passwordText, setPasswordText] = useState('');
    const[emailText, setEmailText] = useState('');
    const[userNameText, setUserNameText] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async() => {
      try {
        const response = await createUserWithEmailAndPassword(auth, emailText, passwordText);
        await setDoc(doc(db, "users", response.user.uid), {
          email: emailText,
          password: response.user.reloadUserInfo.passwordHash,
          userName: userNameText
        });
        
        navigate('/profile');

      } catch(error) {
        console.log(error);
      }
    }


  return (
    <div className='signUpFormContainer'>
    <h1>Create An Account</h1>
      <div className='userNameContainer'>
      <div className='userNameLabel'>
          <label htmlFor='userName'>User name</label>
        </div>
        <input
        type = 'text'
        id = 'userName'
        className = 'emailInput'
        required
        placeholder='Choose a username'
        value = {userNameText}
        onChange = {(e) => {setUserNameText(e.target.value)}}/>
        <div className='userNameLabel'>
          <label htmlFor='userName'>Email</label>
        </div>
        <input
        type = 'text'
        id = 'userName'
        className = 'emailInput'
        required
        placeholder='Enter email'
        value = {emailText}
        onChange = {(e) => {setEmailText(e.target.value)}}/>
        <div className='userNameLabel'>
          <label htmlFor='email'>Password</label>
        </div>
        <input
        type = 'password'
        id = 'email'
        className = 'userNameInput'
        placeholder='Enter password'
        value = {passwordText}
        onChange = {(e) => {setPasswordText(e.target.value)}}/>
      </div>
        <div className='saveButtonContainer'>
        <button className = "saveButton btn btn-primary" onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className = 'filler'></div>

    </div>
  )
}
