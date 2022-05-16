import React, { Component } from 'react';
import Home from './../Home';
import About from './../About';
import Profile from './../Profile';
import Portfolie from './../Portfolie';
import SocailMedia from './../SocailMedia';
import Work from './../Work';
import Footer from './../Footer';

class Index extends Component {
	render() {
		return (
			<div>
				<Home />
				<Work />
				<Portfolie />
				<Profile />
				<About />
				<SocailMedia />
				<Footer />
			</div>
		);
	}
}

export default Index;
