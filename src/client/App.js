import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    <Route path="/posts" component={Posts}/>
                </div>
            </Router>
        );
    }
}

export default App;