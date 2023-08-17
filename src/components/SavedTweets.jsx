import React, {useEffect, useContext} from 'react'
import { DisplayTweet } from './DisplayTweet'
import { TweetsContext } from '../context/TweetsContextProvider';

export const SavedTweets = () => {

  const {savedTweets} = useContext(TweetsContext);

  return (
    <div className = "homePage">
        {savedTweets
        .sort((a,b) => new Date(b.date) - new Date (a.date))
        .map((tweet, index) => <DisplayTweet tweet = {tweet} key = {index}/>)}
    </div>
  )
}
