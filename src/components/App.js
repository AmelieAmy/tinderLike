import React from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Home from './Home'
import Chat from './Chat'
import ChatScreen from './ChatScreen'


const App = () =>
{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/chat/:person" component={ChatScreen}/>
            <Route path="/chat" component={Chat}/>
        </Switch>
    );
}

export default App;