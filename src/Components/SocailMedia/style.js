import styled from 'styled-components';
export const Socialmedia = styled.div`
height: auto;
overflow: hidden;
`;
export const Social = styled.div`
width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.num === 1 ? '#3b5998' : ''} ;
    background: ${props => props.num === 2 ? '#498cbf' : ''} ;
    background: ${props => props.num === 3 ? '#cc2127' : ''} ;
    @media (max-width:991px) {
            width: 100%;
            float: none;
        }
`;

export const Socialicon = styled.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px;

`;
export const Socialp = styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff;
span {
    display: block;
    margin-bottom: 8px
}
`;
export const Socialinfo = styled.p`
font-weight: normal
`;




