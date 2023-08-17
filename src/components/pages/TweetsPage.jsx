import React, { useContext, useEffect } from 'react'
import { CreateTweet } from '../CreateTweet';
import Loader from '../Loader';
import { SavedTweets } from '../SavedTweets';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';
import { TweetsContext } from '../../context/TweetsContextProvider';
import { AuthContext } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export const TweetsPage = () => {

  const{setSavedTweets, setIsLoading} = useContext(TweetsContext);
  const{userID} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    if (!userID) {
      navigate('/profile')
    }

    const q = collection(db, "tweets");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const tweetsArray = [];
    querySnapshot.forEach((tweet) => {
      const tweetWithId = {
        id: tweet.id,
        ...tweet.data()
      };
      tweetsArray.push(tweetWithId);
  });
  setSavedTweets(tweetsArray);
  setIsLoading(false);
}); 

    return () => unsubscribe();

  }, [])

  return (
    <div className = 'outer'>
    <div className='mainContainer'>
      <CreateTweet {...{userID}}/>
      <Loader/>
      <SavedTweets/>
    </div> 
    </div> 
  );
}
