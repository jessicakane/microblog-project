import React, { useContext, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

export const UserName = () => {

    const[userNameText, setUserNameText] = useState('');
    const[userImage, setUserImage] = useState(false);
    const{userID} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = async(e) => {
        e.preventDefault();
        const storageRef = ref(storage, `/images/${userImage.name}`);
        await uploadBytes(storageRef, userImage);
        const imageURL = await getDownloadURL(storageRef);
        const userRef = doc(db, 'users', userID);
        await updateDoc(userRef, {
            image: imageURL,
            userName: userNameText
        })   
        navigate('/');     
    }

    const handleFile = (e) => {
        setUserImage(e.target.files[0]);
    }

  return (
    <div className='outer2'>
    <div className = 'signUpFormContainer'>
    <div className = 'userNameContainer'>
    <div className='userNameLabel'>
          <label htmlFor='email'>User name</label>
        </div>
        <input
        type = 'text'
        id = 'email'
        className = 'userNameInput'
        placeholder='Choose a user name'
        value = {userNameText}
        onChange = {(e) => {setUserNameText(e.target.value)}}/>
        </div>
        <label htmlFor='profpic'>Upload a profile picture</label>
        <input className = 'form-control' type = 'file' id = 'profpic' onChange={handleFile}/>
        <div className = 'saveButtonContainer'>
        <button onClick = {handleUpdate} className = "saveButton btn btn-primary">Update profile</button>
        
        </div>
        </div>
    </div>
  )
}
