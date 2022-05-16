import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Profileskills, Profiles,Profilelist ,Profileitem,Skillbar,Skills,Skilldesc,Skillbarperc ,Profiletitle,Skillbarparent, Skillstitle,Skillbartitle} from './style.js'
const Profile = () => {
    const [ skill, setSkill] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => {setSkill( res.data.skill) })
		
}, []);
		
		const skillList = skill.map((item) => {
			return (
                <Skillbar key={item.id}>
                <Skillbartitle>{item.title}</Skillbartitle>
                    <Skillbarperc>{ item.percent}</Skillbarperc>
                <Skillbarparent>
                    <span style={{width: item.percent}}></span>
                </Skillbarparent>
            </Skillbar>
			);
		});
    return (
        <Profileskills>
            <div className="container">
                <Profiles>
                    <Profiletitle><span>My </span>Profile</Profiletitle>
                    <Profilelist>
                        <Profileitem>
                            <span>Name</span>
                            Hamza Nabil
                        </Profileitem>
                        <Profileitem>
                            <span>Birthday</span>
                            21/1/1996
                        </Profileitem>
                        <Profileitem>
                            <span>Address</span>
                            Ain shams
                        </Profileitem>
                        <Profileitem>
                            <span>Phone</span>
                            4444 5555 6666
                        </Profileitem>
                        <Profileitem>
                            <span>Email</span>
                            hamza@hamza.com
                        </Profileitem>
                        <Profileitem>
                            <span>Website</span>
                            <span className="web">www.google.com</span>
                        </Profileitem>
                    </Profilelist>
                </Profiles>
                
                <Skills>
                    <Skillstitle>Some <span>skills</span></Skillstitle>
                    <Skilldesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skilldesc>
                    {skillList}
                </Skills>
                
            </div>
        </Profileskills>
    )
} 
export default Profile;