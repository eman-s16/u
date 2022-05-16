import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Index}  />
						<Route path="/" component={Contact} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
