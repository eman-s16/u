import React from 'react';
import { Creative, Creativeinfo, Creativetitle,Creativedir,Creativedesc} from'./style.js'
const About = () => {
    return (
        <Creative>
            <div className="container">
                <Creativeinfo>
                    <Creativetitle><span>This is</span> Me</Creativetitle>
                    <Creativedir>Creative Director</Creativedir>
                    <Creativedesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="/#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Creativedesc>
                    <Creativedesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Creativedesc>
                </Creativeinfo>
            </div>
        </Creative>
    )
} 
export default About;