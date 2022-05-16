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
					<Routes basename="/u">
						<Route exact path="/u" element={<Index />}  />
						<Route exact path="/u/Contact" element={<Contact />} />
						
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
