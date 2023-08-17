import React, {useState,  useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from '../context/AuthContextProvider';

export const ProfileForm = () => {

    const[emailText, setEmailText] = useState('');
    const[passwordText, setPasswordText] = useState('');
    const[userName, setUserName] = useState('');

    const {setUserID, userID} = useContext(AuthContext);

    const navigate = useNavigate();

    const getUserName = async() => {
      try {
      const docRef = doc(db, 'users', userID);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      console.log(data.userName);
      setUserName(data.userName)
      } catch (error) {
        console.log(error);
      }

    }

    useEffect (() => {
      getUserName();
    },[])

    const handleLogIn = async() => {
      try {
        const userCredentials = await signInWithEmailAndPassword(auth, emailText, passwordText);
        console.log(userCredentials);
        localStorage.setItem('userID', userCredentials.user.uid);
        setUserID(userCredentials.user.uid);
        navigate('/');

      } catch(error) {
        console.log(error)
      }
        
    }

    const handleLogOut = () => {
      setUserID(false);
    }

    const handleChangeUserName = () => {
      navigate('/username')
    }

  return (
    <div className='profileFormContainer'>
    <h1>Log In</h1>
      {userID ? (<h1 className='welcomeUser'>Welcome {userName}!</h1>) : 
      (<div className='userNameContainer'>
        <div className='userNameLabel'>
          <label htmlFor='userName'>Email</label>
        </div>
        <input
        type = 'text'
        id = 'userName'
        className = 'userNameInput'
        value = {emailText}
        placeholder='Enter email'
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
      </div>)}
        <div className='saveButtonContainer'>
        {!userID ? (<button onClick = {handleLogIn} className = "saveButton btn btn-primary">Log In</button>) : (<div className = 'buttonContainer'>
          <button onClick = {handleLogOut} className = "saveButton btn btn-primary">Sign Out</button>
          <button onClick = {handleChangeUserName} className = "saveButton btn btn-primary">Update profile</button>
          </div>)}
        </div>
        <div className = 'filler'></div>

    </div>
  )
}
