import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  box-shadow: 0px -8px 22px 4px rgba(0,0,0,0.5);
`;

export const HeaderDiv = styled.div`
 display: flex;
 justify-content: space-around;
 height: 96px;

`;

export const HeaderDivImg = styled.img`
 height: 40px;
 width: 40px;

 &:hover {
  cursor: pointer;
 }
`;

export const HomeButton = styled.button`
 background-color: transparent;
 border: none;

 &:hover {
  cursor: pointer;
 }
`;

export const HeaderDivH3 = styled.a`
  align-items: center;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-decoration: none;
  width: 100px;

  &:hover {
    color: #FF3838;
    cursor: pointer;
    font-size: 21px;
  }
`;
