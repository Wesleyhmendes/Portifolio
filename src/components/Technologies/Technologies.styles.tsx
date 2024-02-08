import styled from 'styled-components';

export const TechSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {

  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const TechH1 = styled.h1`
  color: #FF3838;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 800;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 50px;
    margin-bottom: 0.5em;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
  }
`;

export const TechButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (min-width: 800px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  @media (min-width: 1600px) {
    width: 19%;
  }
`;

export const TechButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
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

  @media (min-width: 800px) {

  }

  @media (min-width: 1200px) {
    
  }
`;

export const TechDivIconsOutsideFront = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1em;
  margin-top: 2em;
  width: 70%;

  &.off {
    display: none;
  }

  @media (min-width: 800px) {
    margin-top: 4em;
  }

  @media (min-width: 1200px) {
    margin-top: 6em;
  }
`;

export const TechDivIconsInsideFront = styled.div`
  text-align: center;
  font-family: Poppins;
  font-weight: 600;

  @media (min-width: 800px) {
    
  }

  @media (min-width: 1200px) {
    
  }
`;

export const TechDivIconsOutsideBack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1em;
  margin-top: 2em;
  width: 70%;

  &.off {
    display: none;
  }

  @media (min-width: 800px) {
    margin-top: 3em;
  }

  @media (min-width: 1200px) {
    margin-top: 5em;
  }
`;

export const TechIconImg = styled.img`
 width: 65px;

 @media (min-width: 800px) {

 }

 @media (min-width: 1200px) {
    
  }
`;

export const TechDivIconsInsideBack = styled.div`
  text-align: center;
  font-family: Poppins;
  font-weight: 600;

  @media (min-width: 800px) {

  }

  @media (min-width: 1200px) {
    
  }
`;

export const NodeImg = styled.img`
  &.node {
    height: 95px;
    width: 130px;
  }

  &:hover {
    color: #FF3838;
  }

  @media (min-width: 800px) {

  }

  @media (min-width: 1200px) {
    
  }
`;

export const TechIconName = styled.p`
  &:hover {
    color: #ff3838;
  }
`;

export const TechSkillsH3 = styled.h2`
  color: #ff3838;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 600;
  margin-top: 10%;
  text-align: center;

  @media (min-width: 800px) {
    margin-top: 9%;
    font-size: 33px;
  }

  @media (min-width: 1200px) {
    margin-top: 5%;
    font-size: 33px;
  }
`;
