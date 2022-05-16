import styled, { css } from 'styled-components';
const style = css`
	position: absolute;
	top: 13px;
	right: 25px;
`;

export const Inputcss = styled.input`
	${style};
	display: none;
	&:checked ~ ul {
		display: block;
	}
	&:checked ~ ul {
		display: block;
	}

	&:checked ~ label {
		background: url('./images/Navbar/close.png') no-repeat;
		background-size: cover;
	}
`;
export const Labelcss = styled.label`
	${style};
	display: block;
	width: 15px;
	height: 15px;
	background: url('./images/Navbar/open.png') no-repeat;
	background-size: cover;
	padding: 20px;
	cursor: pointer;
	@media (min-width: 992px) {
		display: none;
	}
`;
