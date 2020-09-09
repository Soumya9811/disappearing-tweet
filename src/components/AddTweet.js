import React, { useRef } from 'react'
import { DatePicker, Space } from 'antd';
import { useDispatch } from 'react-redux';
import {addTweet} from '../redux/tweetActions';
import moment from 'moment';
import './AddTweet.css'

export default function AddTweet() {
    const dispatch = useDispatch();
    const tweeTextRef = useRef(null);    
    var tweetMoment;
    function submitTweet()
    {
        var tw = document.getElementById("tw").value;
        // var tw = tweeTextRef.current.value;
    
        dispatch(addTweet({tweetText:tw, tweetMoment:tweetMoment, timeLeft:tweetMoment.unix()-moment().unix() }));
    }

    
    function onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value.unix());
        tweetMoment=value;
    }

    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      }
    
function disabledDate(current) {
    // Can not select days before today and today
    return current < moment().subtract(1,"day");
  }
  
  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(0, moment().hours()),
      disabledMinutes: () => range(0, 60).splice(0, moment().minutes()),
      disabledSeconds: () => range(0, 60).splice(0, moment().seconds()),
    };
  }
    return (
        <div className="addtweet">
            <input type="text" ref={tweeTextRef} name="tweet" id="tw" placeholder="Write Your Tweet Here.."/>
            <Space id="sdt" direction="vertical" size={12}>
                <DatePicker  disabledDate={disabledDate}
                disabledTime={disabledDateTime} showTime onChange={onChange} onOk={onOk} />
            </Space>
            <button onClick={submitTweet} > Tweet </button>
        </div>
    )
}
