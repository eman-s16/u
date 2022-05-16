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
						<Route exact path="/*" element={<Index />}  />
						<Route path="/" element={<Contact/>} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
