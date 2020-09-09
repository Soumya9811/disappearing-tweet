import React from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux';
import './App.css';
import store from './redux/tweetStore';
import AddTweet from './components/AddTweet';
import 'antd/dist/antd.css';
import TweetList from './components/TweetList';
import Header from './components/Header';

function App() {

  console.log("store in app js ");
  console.log(store);

  return (
<Provider store={store}>
     <Header/>
    <AddTweet/>
    <TweetList/>
    </Provider>
  );
}

export default App;
