import React, {Component} from 'react';
import "./Week.css"
import {Link} from 'react-router-dom';

class Week extends Component{
    render(){
        return(
        <div className="container">
            <div id ="username">Hello, user</div>
                    <div className="days">
                        <div className="sun">
                            <div>Sunday</div>
                            <div className="detailbox">
                                <Link to="/entrySun">
                                <button>
                                    + 
                                </button>
                                </Link>
                            </div>
                            
                                    <button>
                                      edit
                                    </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>
                        
                        
                        
                        <div className="mon">
                            <div>Monday</div>
                            <div className ="detailbox">
                                <Link to="/entryMon">
                                    <button>
                                        +
                                    </button>
                                </Link>
                            </div>
                            <button type="button">
                                edit
                            </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>
                        
                        
                        <div className="tue">
                            <div>Tuesday</div>
                            <div className="detailbox">
                                <Link to="entryTue">
                                    <button>
                                        +
                                    </button>
                                </Link> 
                            </div>
                            <button type="button">
                                edit
                            </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>


                        <div className="wed">
                            <div>Wednesday</div>
                            <div className="detailbox">
                                <Link to="entryWed">
                                    <button>
                                        +
                                    </button>
                                </Link>
                            </div>
                            <button type="button">
                                edit
                            </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>
                        
                        
                        <div className="thu">
                            <div>Thursday</div>
                            <div className="detailbox">
                                <Link to="entryThur">
                                    <button>
                                        +
                                    </button>
                                </Link>
                            </div>
                            <button type="button">
                                edit
                            </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>
                        
                        
                        <div className="fri">
                            <div>Friday</div>
                            <div className="detailbox">
                                <Link to="entryFri">
                                    <button>
                                        +
                                    </button>
                                </Link>
                            </div>
                            <button type="button">
                                edit
                            </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>
                        
                        
                        <div className="sat">
                            <div>Saturday</div>
                            <div className="detailbox">
                                <Link to="entrySat">
                                    <button>
                                        +
                                    </button>
                                </Link>
                            </div>
                            <button type="button">
                                edit
                            </button>
                            <button type="button">
                                remove reminder
                            </button>
                        </div>
            </div>
            <button type="button">Add New Week</button>
        </div>
    
        )
    }
}

 export default Week;