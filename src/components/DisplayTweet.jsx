import {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";


export const DisplayTweet = ({tweet}) => {

  const[user, setUser] = useState('');

  const getUser = async(tweet) => {
    try {
    const docRef = doc(db, "users", tweet.userName);
    const thisUser = await getDoc(docRef);
    const data = thisUser.data();
    setUser(data);
    console.log(data.userName);
    console.log(user.image);
    } catch(error) {
      console.log(error);
    }

  }

  
  useEffect(() => {
    getUser(tweet)
  }, [])

  return (
    <div className = "tweetContainer">
        <div className="tweetHeader">
            <img src = {user.image} alt = {user.username}></img>
            <p className = "username">{user.userName}</p>
            
            <div className='dateContainer'>
            <p className = "date">{tweet.date}</p>
            </div>
        </div>
        <p className = "tweetContent">
            {tweet.content}
        </p>
        
    </div>
  )
}
