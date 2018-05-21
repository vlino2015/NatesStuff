import React, {Component} from 'react';
import "./logout.css"


class Logout extends Component {
    render(){
        return(
            <div className="logout-container">
                <div className="logout-button">
                    <button type="button">Logout</button>
                </div>
            </div>
        )
    }
}

export default Logout;