import styled, { css } from 'styled-components';
export const Profileskills = styled.div`
	padding: 50px 0;
	overflow: hidden;
`;
export const Profiles = styled.div`
	width: 50%;
	float: left;
	,
	@media(max-width:768px) {
		width: 100%;
		float: none;
		margin-bottom: 20px;
	}
`;
export const Profilelist = styled.ul`list-style: none;`;

export const Profileitem = styled.li`
	margin-bottom: 8px;
     span {
		display: inline-block;
		width: 100px;
		font-weight: bold;
		&.web {
			font-weight: normal;
			color: #eb5424;
		}
	}
`;

export const Skills = styled.div`
	width: 50%;
	float: left;
	@media (max-width: 768px) {
		width: 100%;
		float: none;
	}
`;
export const Skilldesc = styled.p`
	font-size: 15px;
	color: #888;
	line-height: 1.5;
	margin-bottom: 20px;
`;

export const Skillbar = styled.div`
	font-size: 15px;
	color: #888;
	line-height: 1.5;
	margin-bottom: 20px;
`;

export const Skillbartitle = styled.span`float: left;`;

export const Skillbarperc = styled.span`
	float: right;
	margin-right: 100px;
`;
export const Skillbarparent = styled.div`
	height: 2px;
	clear: both;
	background: #f8f8f8;
	position: relative;
	top: 5px;
	span {
		background: #eb5424;
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		bottom: 0;
	}
`;
const style = css`
	font-size: 40px;
	margin-bottom: 20px;
	span {
		font-weight: normal;
	}
`;
export const Profiletitle = styled.h2`${style};`;
export const Skillstitle = styled.h2`${style};`;
