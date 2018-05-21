import React, {Component} from 'react';
import "./reminder.css"

class Reminders extends Component{
    render(){
        return(
            <div className="reminder-container">
                <div className="reminder-title">
                    View All Reminders
                </div>
                <div className="previous_weeks">
                    View Previous Weeks
                </div>
                    
            </div>
        )
    }
}

export default Reminders