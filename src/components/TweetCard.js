import React, { useEffect } from 'react'
import './TweetCard.css'
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteTweet, updateTweet} from '../redux/tweetActions';

export default function TweetCard(props) {
    

   const dispatch = useDispatch();
   console.log(" On tweetCard")
   console.log(props);
    if(props.tweetMoment.unix()-moment().unix()<=0)
    {
        dispatch(deleteTweet(props.idx));
    }

    return (
        <div className="tweetCard" >
            <h2> {props.tweetMoment.unix()-moment().unix()} Seconds left </h2>
                <p> {props.tweetText}</p>
        </div>
    )
}
