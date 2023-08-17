import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { collection, addDoc, getDocs, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { db } from '../firebase';

const TweetsContext = createContext();

export const TweetsContextProvider = ({children}) => {

  const [savedTweets, setSavedTweets] = useState([]);
  const[error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const tweetsCollection = collection(db, 'tweets');

  const addTweet = (tweet) => {
    setSavedTweets([tweet, ...savedTweets]);
  }


  async function createTweet(tweet) {
    try {
      await addDoc(tweetsCollection, tweet);
    
    } catch (error) {
      setError("There's seems to be trouble creating your tweet. Try again in a bit!");
      return null;
    }
  }



  return (
    <TweetsContext.Provider value = {{error, addTweet, createTweet, isLoading, savedTweets, setSavedTweets, setIsLoading}}>
      {children}
    </TweetsContext.Provider>
  )
}

export {TweetsContext};
