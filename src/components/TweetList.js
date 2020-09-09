import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TweetCard from './TweetCard';
import './TweetList.css';
import { updateTweet } from '../redux/tweetActions';

export default function TweetList() {

    const allTweets = useSelector(s=>s.tweets);





    const dispatch = useDispatch();
    useEffect(() => {
        var rerenderer = setInterval(()=>{  dispatch(updateTweet()) }, 1000);
         return () => {
             clearInterval(rerenderer);
         }
     }, []);



    return (
        <>
        <h1>Tweet List</h1>


        
        {allTweets.length==0 && <h2> No Tweets available </h2>}



        <div className="tweetList">
            {allTweets.map((t, idx)=>{
                return <TweetCard key={idx} idx={idx} tweetText={t.tweetText} tweetMoment={t.tweetMoment}/>
            })}
        </div>
        </>
    )
}
