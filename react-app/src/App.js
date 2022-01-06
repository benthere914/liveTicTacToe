import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
require('dotenv').config();
function App() {
	return (
		<BrowserRouter>
			<Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
