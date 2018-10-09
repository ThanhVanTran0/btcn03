import React from 'react';

import Navbar from './components/Navbar'
import Explore from './components/Explore'
import TagSearch from './components/TagSearch'
import Photo from './components/Photo'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Router>
                    <div>
                        <Route exact path='/' component={Explore} />
                        <Route exact path='/search*' component={TagSearch} />
                        <Route exact path='/photo/:id' component={Photo}/>
                    </div>
                </Router>
            </div>

        );
    }
}

