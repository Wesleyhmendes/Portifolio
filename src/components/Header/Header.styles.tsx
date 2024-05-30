import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.7em;
  box-shadow: 0px -4px 3px 4px rgba(0,0,0,0.5);

  div {
    display: flex;
    justify-content: space-around;

    img {
      height: 40px;
      width: 40px;
      &:hover { cursor: pointer; }
    }

    a, .contact-btn {
      align-items: center;
      border: none;
      color: black;
      display: flex;
      justify-content: space-around;
      font-family: "Poppins", sans-serif;
      font-size: medium;
      font-weight: 600;
      text-decoration: none;
      width: 100px;

      &:hover {
        color: #FF3838;
        cursor: pointer;
      }
    }

    .contact-btn {
      background-color: transparent;
      padding-top: 2px;
    }
  }
`;

export const HomeButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover {cursor: pointer;}

  img { width: 2rem; }
`;
