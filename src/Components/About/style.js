import styled from 'styled-components';
export const Creative = styled.div`
	height: 500px;
	background: url('./images/creative/about-bg.jpg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	@media (max-width: 991px) {
		height: auto;
	}
`;
export const Creativeinfo = styled.div`
	padding-top: 100px;
	width: 50%;
	float: right;
	@media (max-width: 991px) {
		width: 100%;
		padding-top: 10px;
		float: none;
	}
`;

export const Creativetitle = styled.h2`
	font-weight: bold;
	font-size: 50px;
	span {
		font-weight: normal;
	}
`;
export const Creativedir = styled.h4`
font-size: 40px;
color: #eb5424;
margin-bottom: 20px;
@media (max-width:991px) {   
    .creative .creative-info .info-dir {
        font-size: 30px
  
}
`;

export const Creativedesc = styled.p`
	color: #000;
	margin-bottom: 15px;
	line-height: 1.8;
	a {
		text-decoration: none;
	}
`;
