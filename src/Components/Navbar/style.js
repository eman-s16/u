import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const Navbarseaction = styled.div`
	padding: 20px 0;
	overflow: hidden;
	background: #fff;
	position: relative;
	border-bottom: 1px solid #000;
`;
export const Logo = styled.div`
	width: 50%;
	float: left;
	@media (max-width: 991px) {
		width: 100%;
		float: none;
	}
`;
export const Logotext = styled.h2`
	font-size: 30px;
	font-weight: bold;
    
`;

export const UlList = styled.ul`
	width: 50%;
	float: left;
	list-style: none;
	padding: 0;
	@media (max-width: 991px) {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none

	}
`;

export const ListItem = styled.li`
	display: inline-block;
	&:first-of-type a{
		color: #eb5424;
	}
	@media (max-width: 991px) {
		display: block;
		text-align: center;
	}

`;

const styles = css`
	display: block;
	color: #222;
	text-decoration: none;
	padding: 10px 15px;
	font-weight: bold;

	&:hover {
		color: #eb5424;
		cursor:pointer;
	}
`;
export const Achor = styled.a`
${styles};`;
export const LinkCss = styled(Link)`
${styles};
`;

/* Media for Navbar Style */
