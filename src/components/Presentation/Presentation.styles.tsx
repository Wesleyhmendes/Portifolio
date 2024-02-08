import styled from 'styled-components';

// Min screen = 480p
export const PresentationSection = styled.section`
  margin-top: 1em;

  @media (min-width: 800px) {
    margin-left: 2em;
  }

  @media (min-width: 1200px) {
    margin-left: 6em;
  }
`;

export const PresentationPictureDiv = styled.div`
 display: flex;
 justify-content: flex-end;

   @media (min-width: 1200px) {
    
  }
`;

export const PresentationPicture = styled.img`
  width: 300px;
  position: absolute;
  opacity: 40%;
  z-index: 1;


  @media (min-width: 800px) {
    height: 480px;
    width: 400px;
  }

  @media (min-width: 1200px) {
    height: 730px;
    opacity: 80%;
    width: 650px;
  }
`;

export const PresentationDiv = styled.div`
  margin-left: 10px;
  margin-top: 70px;
  position: relative;
  z-index: 2;

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1200px) {

  }
`;

export const PresentationDivH2 = styled.h2`
  font-family: Poppins;
  font-size: 17px;
  font-weight: 600;
  color: #FF3838;

  @media (min-width: 800px) {
    font-size: 25px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const PresentationDivH1 = styled.h1`
  font-family: Poppins;
  font-size: 32px;
  color: #FF3838;
  font-weight: 800;
  width: 60%;

  @media (min-width: 800px) {
    font-size: 50px;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
  }
`;

export const PresentationDivP = styled.p`
  font-family: Poppins;
  font-weight: 400;
  line-height: 22px;
  width: 80%;

  @media (min-width: 800px) {
    line-height: 32px;
    font-size: 22px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    line-height: 40px;
    width: 70%;
  }
`;

export const PresentationButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18%;

  @media (min-width: 800px) {
    margin-top: 10%;
    justify-content: flex-start;
    margin-left: 2em;
  }

  @media (min-width: 1200px) {
    margin-top: 7%;
    justify-content: flex-start;
    margin-left: 2em;
  }
`;

export const PresentationCVButton = styled.button`
  background-color: #FF3838;
  box-shadow: 0px 2.8px 7px 0.8px rgba(0,0,0,0.3);
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-weight: 700;
  height: 36px;
  text-align: center;
  width: 150px;

  &:hover {
    background-color: #ff1313;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    font-size: 20px;
    height: 50px;
    width: 250px;
  }

  @media (min-width: 1200px) {
    
  }
`;
