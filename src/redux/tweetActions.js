import { ADD_TWEET, DELETE_TWEET, UPDATE_TWEET } from "./tweetTypes";


export function addTweet(t)
{
    console.log("in add tweet action",t);
        return {
            type:ADD_TWEET,
            payload:t
        }
}

export function deleteTweet(id)
{
        return {
            type:DELETE_TWEET,
            payload:id
        }
}
export function updateTweet(id)
{
        return {
            type:UPDATE_TWEET,
            payload:id
        }
}