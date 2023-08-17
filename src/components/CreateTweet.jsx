import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../context/AuthContextProvider';
import { TweetsContext } from '../context/TweetsContextProvider';

export const CreateTweet = ({userID}) => {
    
    const {error, isLoading, addTweet, createTweet} = useContext(TweetsContext);
    
    const [text, setText] = useState('');
    const [isTooLong, setIsTooLong] = useState(false);
    
    const submitTweet = () => {
        if (isLoading) {
          return;
        }
        if (text.trim() === '') {
            return;
          }
        if (text.length > 140) {
            setIsTooLong(true);
            return;
        }
        const tweet = {
            userName: userID,
            content: text,
            date: new Date().toISOString()
        }
        createTweet(tweet).then((response) => {
          addTweet(tweet);
        }).catch((error) => console.error(error));
        setText('');
    }

  return (
    <div className = "writeTweetContainer">
        <div className = "tweetOutline">
        <textarea
        className="tweetInput"
        rows = '5'
        cols = '70'
        value={text}
        placeholder= "What's on your mind?..."
        onChange = {(e) => setText(e.target.value)}/>
        <div className = "bottomOfTweet">
        <button className = "tweetButton btn btn-primary" onClick = {submitTweet}>Tweet</button>
        <div className = {isTooLong ? 'showError' : 'hideError'}>
            <div className = 'alert alert-danger'>Your tweet can't contain more than 140 chars</div>
        </div>
        <div className = {error ? 'showError' : 'hideError'}>
            <div className = 'alert alert-danger'>{error}</div>
        </div>
        </div>
        </div>
    </div>
  )
}
