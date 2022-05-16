import React from 'react';
import axios from 'axios';
import {Workseaction, Worktitle, Workpart,Workicon, Workparttitle,Workline,Workpartdesc } from './style.js';
class Work extends React.Component {
	state = {
		works : []
	}
	componentDidMount() {
		axios.get('js/data.json').then(res => {this.setState({works : res.data.works})})
	}
	render() {
		const { works } = this.state;
		const workList = works.map((workItem) =>
		{
			return (
				<Workpart first={workItem.id}  key={workItem.id}>
						<Workicon className={workItem.icon_name} />
						<Workparttitle>{workItem.title}</Workparttitle>
						<Workline />
						<Workpartdesc>
						{workItem.body}
						</Workpartdesc>
					</Workpart>
			)
		})
		return (
			<Workseaction>
				<div className="container">
					<Worktitle>
						<span>My</span> Work
					</Worktitle>
					{workList}
				</div>
			</Workseaction>
		);
}
};
export default Work;
