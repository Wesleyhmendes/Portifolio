/* eslint-disable max-lines */
import styled from 'styled-components';

export const ProjectSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1em;


  @media (min-width: 800px) {
    margin: 0 auto;
    width: 75%;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
    width: 75%;
  }
`;

export const ProjectH1 = styled.h1`
  color: #FF3838;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 800;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;

  @media (min-width: 800px) {
  font-size: 50px;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  margin-bottom: 2em;

  @media (min-width: 800px) {
    margin-bottom: 6em;
  }

  @media (min-width: 1200px) {
    margin-bottom: 8em;
  }
`;

export const ProjectImg = styled.img`
  height: 200px;
  padding-left: 1.5em;

  @media (min-width: 800px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

export const ProjectImgDesktop = styled.img`
  display: none;

  @media (min-width: 800px) {
  }

  @media (min-width: 1368px) {
    display: inline;
    height: 350px;
    margin-left: 15px;
  }
`;

export const ProjectDescriptionDiv = styled.div`
  margin-left: 1.5em;

  @media (min-width: 800px) {
    
  }

  @media (min-width: 1200px) {

  }
`;

export const ProjectH2 = styled.h2`
  color: #FF3838;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 1em;
  text-decoration: none;

  @media (min-width: 800px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 35px;
  }
`;

export const ProjectTagDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5em;
  margin-bottom: 0.5em;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    gap: 1.5em;
    margin-bottom: 1.5em;
  }

  @media (min-width: 1200px) {
    gap: 1.5em;
    margin-bottom: 2.5em;
  }
`;

export const ProjectH4 = styled.h4`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;

  @media (min-width: 800px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    
  }
`;

export const ProjectTagsReact = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #5ed3f3;
  color: #FFFF;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  width: 70px;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 90px;
  }
`;

export const ProjectTagsTs = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #2f74c0;
  color: #FFFF;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  width: 120px;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 140px;
  }
`;

export const ProjectTagsNode = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #8BBF3D;
  color: #FFFF;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  width: 120px;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 140px;
  }
`;

export const ProjectTagsDocker = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #0997e5;
  color: #FFFF;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  width: 120px;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 140px;
  }
`;

export const ProjectTagsFront = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #FF3838;
  color: #FFFF;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  width: 120px;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 140px;
  }
`;

export const ProjectTagsBack = styled.button`
  border: none;
  border-radius: 7px;
  background-color: #292929;
  color: #FFFF;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  width: 120px;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 140px;
  }
`;

export const ProjectP = styled.p`
  font-size: 15px;
  font-family: Poppins;

  @media (min-width: 800px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
`;

export const ProjectAccessBtn = styled.button`
  background-color: #FF3838;
  box-shadow: 0px 2.8px 7px 0.8px rgba(0,0,0,0.3);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 700;
  height: 40px;
  margin-top: 1em;
  text-align: center;
  width: 150px;

  &:hover {
    background-color: #ff1313;
    cursor: pointer;
  }

  @media (min-width: 800px) {
   
  }

  @media (min-width: 1200px) {
    
  }
`;
