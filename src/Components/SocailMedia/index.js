import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Socialmedia, Socialicon, Socialp, Socialinfo,Social } from './style.js';
const SocailMedia = () => {
	const [ social, setSocail ] = useState([]);
	useEffect(() => {
		axios.get('js/data.json').then((res) => {
			setSocail(res.data.social);
		});
	}, []);

	const SocailList = social.map((item) => {
		return (
			<Social num={item.id} key={item.id}>
				<Socialicon className={item.icon} />
				<Socialp>
					<span>{item.title}</span>
					<Socialinfo>{item.body}</Socialinfo>
				</Socialp>
			</Social>
		);
	});

	return <Socialmedia>{SocailList}</Socialmedia>;
};

export default SocailMedia;
