import React from 'react';
import
{
    Switch,
    Route
} from "react-router-dom";

// components
import Home from './home'

const App = () =>
{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
        </Switch>
    );
}

export default App;