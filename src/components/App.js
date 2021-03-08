import React from 'react';
import
{
    Switch,
    Route
} from "react-router-dom";

// components
import Header from './header'
import Home from './Home'
import Chat from './Chat'

const App = () =>
{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/" component={Chat} >
                <Header backButton="/" />
            </Route>
            <Route path="/chat" component={Chat}/>
        </Switch>
    );
}

export default App;