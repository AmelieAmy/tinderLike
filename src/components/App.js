import React from 'react';
import
{
    Switch,
    Route
} from "react-router-dom";

// components
import Home from './Home'
import Chats from './Chats'

const App = () =>
{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/chats" component={Chats}/>
        </Switch>
    );
}

export default App;