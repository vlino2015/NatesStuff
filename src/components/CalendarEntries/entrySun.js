import React, {Component} from 'react';
import './CalendarEntry.css'


class CalendarEntrySun extends Component{
    render(){
        return(
            <div className="text-container">
            <textarea rows="10" cols="50" id="text-box">
                Sun
            </textarea>
            </div>
        )
    }
}

export default CalendarEntrySun;
