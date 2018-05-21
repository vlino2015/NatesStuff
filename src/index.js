import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CalendarEntrySun from './components/CalendarEntries/entrySun';
import CalenderEntryMon from './components/CalendarEntries/entryMon';
import App from './App'
import CalendarEntryTue from './components/CalendarEntries/entryTue';
import CalendarEntryWed from './components/CalendarEntries/entryWed';
import CalendarEntryThur from './components/CalendarEntries/entryThur';
import CalendarEntryFri from './components/CalendarEntries/entryFri';
import CalendarEntrySat from './components/CalendarEntries/entrySat';



ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path= '/entrySun' component={CalendarEntrySun} />
        <Route path='/entryMon' component={CalenderEntryMon} />
        <Route path= '/entryTue' component={CalendarEntryTue} />
        <Route path= '/entryWed' component={CalendarEntryWed} />
        <Route path= '/entryThur' component={CalendarEntryThur} />
        <Route path= '/entryFri' component={CalendarEntryFri} />
        <Route path= '/entrySat' component={CalendarEntrySat} /> 
        <Route path= '/' component={App} />
    </Switch>
</BrowserRouter>,

document.getElementById('root'));
registerServiceWorker();
