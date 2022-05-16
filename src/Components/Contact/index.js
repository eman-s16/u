import React from 'react';
import {
	Drop,
	Droptitle,
	Textarea,
	Inputemail,
	Inputsub,
	Dropform,
	Inputsubmit,
	Forminput,
	Inputtext
} from './style.js';
import Footer from '../Footer';
const Contact = () => {
	return (
		<React.Fragment>
			<Drop>
				<div className="container">
					<Droptitle>
						<span>Drop </span>Me A line
					</Droptitle>
					<Dropform action="">
						<Forminput>
							<Inputtext type="text" placeholder="Your Name" />
							<Inputemail type="email" placeholder="Your Email" />
						</Forminput>
						<Inputsub type="text" placeholder="Your Subject" />
						<Textarea cols="30" rows="10" placeholder="Your Message" />
						<Inputsubmit type="submit" value="Send Message" />
					</Dropform>
				</div>
			</Drop>
			<Footer />
		</React.Fragment>
	);
};
export default Contact;
