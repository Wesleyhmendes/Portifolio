import styled from 'styled-components';

export const TechSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    color: #FF3838;
    font-family: Poppins;
    font-weight: 800;
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
  }

  h2 {
    color: #ff3838;
    font-family: Poppins;
    font-weight: 600;
    margin-top: 10%;
    text-align: center;
  }

`;

export const TechButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;

  button {
    background: transparent;
    border: none;
    font-weight: 700;
    height: 40px;
    width: 145px;

    &.on {
      border-bottom: 2px solid #1A44DB;
    }

    &.off {
      border-bottom: 2px solid #999999;
    }

    &.off:hover {
      border-radius: 5px;
      border-bottom: none;
      background: #1A44DB;
      cursor: pointer;
      color: #FFFF;
    }

    &.on:hover {
      cursor: pointer;
    }
  }
`;

export const TechDivIconsOutsideFront = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2em;
  width: 80%;

  &.off {
    display: none;
  }

  div {
    text-align: center;
    font-family: Poppins;
    font-weight: 600;
  }

  img { width: 5rem; }

  @media(min-width: 768px) { width: 70%; }
`;

export const TechDivIconsOutsideBack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2em;
  width: 80%;

  &.off {
    display: none;
  }

  div {
    text-align: center;
    font-family: Poppins;
    font-weight: 600;
  }

  img { width: 5rem; }

  @media(min-width: 768px) { width: 70%; }
`;
