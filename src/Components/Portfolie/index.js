import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { Portfolioseaction, Portfoliotitle, Portfoliolist, Portfolioitem, Box, Boximg, Boxoverlay } from './style.js';
const Portfolio = () => {
    const [ images, setImages] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => {setImages( res.data.portfolio) })
		
}, []);
		
		const portfolioList = images.map((item) => {
			return (
				<div key={item.id}>
					<Boximg src={item.image} alt="" />
					<Boxoverlay>
						<span>Show Image</span>
					</Boxoverlay>
				</div>
			);
		});
		return (
			<Portfolioseaction>
				<Portfoliotitle>
					<span>My</span> Portfolio
				</Portfoliotitle>
				<Portfoliolist>
					<Portfolioitem active>All</Portfolioitem>
					<Portfolioitem>HTML</Portfolioitem>
					<Portfolioitem>Photoshop</Portfolioitem>
					<Portfolioitem>Wordpress</Portfolioitem>
					<Portfolioitem>Mobile</Portfolioitem>
				</Portfoliolist>

				<Box>{portfolioList}</Box>
			</Portfolioseaction>
		);
	}

export default Portfolio;

