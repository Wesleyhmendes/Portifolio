import styled from 'styled-components';

export const ProjectSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1em;

  @media (min-width: 800px) {
  padding-right: 4em;
  padding-left: 4em;

  }

  @media (min-width: 1200px) {
    padding-right: 8em;
    padding-left: 8em;
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
  background-color: #142850;
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
  background-color: #4378E2;
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
