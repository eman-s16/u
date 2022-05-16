import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route exact path="https://eman-s16.github.io/u/" component={Index}  />
						<Route path="https://eman-s16.github.io/u/Contact" component={Contact} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
