import styled from 'styled-components';
export const Drop = styled.div`
	padding: 50px 0;
	text-align: center;
`;
export const Droptitle = styled.h2`
	font-size: 60px;
	margin-bottom: 30px span {
		font-weight: normal;
	}
	@media (max-width: 575px) {
		font-size: 40px;
	}
`;
export const Dropform = styled.form`
	width: 70%;
	margin: auto;
	@media (max-width: 575px) {
		width: 90%;
	}
`;

export const Input = styled.input`
	box-sizing: border-box;
	outline: 0;
	padding: 5px;
	margin-bottom: 10px;
`;
export const Forminput = styled.div`
	overflow: hidden;
	input {
		width: 49%;
		@media (max-width: 575px) {
			width: 100%;
		}
	}
`;
export const Inputtext = styled(Input)`
float: left`;
export const Inputemail = styled(Input)`
float: right;
`;
export const Inputsubmit = styled(Input)`
width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    &:hover{
        background: #ccc;
        color:#fff;  
    }
`;
export const Textarea = styled.textarea`
	width: 100%;
	outline: 0;
	background: #ccc;
`;

export const Inputsub = styled(Input)`

width: 100%;
`;
