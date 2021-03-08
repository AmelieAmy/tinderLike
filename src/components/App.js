import React from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Home from './HOME/Home'
import Chat from './CHATS/Chat'
import ChatScreen from './CHATS/ChatScreen'


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