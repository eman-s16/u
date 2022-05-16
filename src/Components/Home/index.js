import React from 'react';
import {Homeseaction, Homeinformation,Hometitle,Homeinfo,Homedesc,Homebtn} from './style.js';
const Home = () => {
    return (
        <Homeseaction>
        <div className="container">
            <Homeinformation>
                <Hometitle>Hamza Nabil</Hometitle>
                <Homeinfo>Creative Director</Homeinfo>
                <Homedesc>
                    Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </Homedesc>
                <Homebtn>Let's Begin</Homebtn>
            </Homeinformation>
        </div>
    </Homeseaction>
    )
} 
export default Home;