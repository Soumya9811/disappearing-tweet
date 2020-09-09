const { ADD_TWEET, DELETE_TWEET, UPDATE_TWEET } = require("./tweetTypes")

const initialState = {
    tweets:[]
}

export function tweetReducer(state=initialState, action)
{

    switch(action.type)
    {
        case ADD_TWEET:
            console.log("in reducer add tweet");
            console.log(action.payload)
                return {
                    tweets: [...state.tweets,action.payload]
                }
            
        case DELETE_TWEET:
            var temp = state.tweets.filter((t,idx)=>{ return idx!==action.payload});
                return {
                    tweets: temp
                }



               
        case UPDATE_TWEET:
            return {
                tweets: state.tweets.map((t)=>{
                   
                         t.timeLeft--;
                  
                    return t;
                })
            }
        default:
            console.log("getting  dummy action");
            return {
                tweets:state.tweets
            }

           
    }


}

export default tweetReducer;