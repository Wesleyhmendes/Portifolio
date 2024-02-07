import styled from 'styled-components';

export const FooterSC = styled.footer`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 800px) {
  
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  gap: 2em;
  margin-bottom: 1em;
  margin-top: 2em;

  @media (min-width: 800px) {

  }
`;

export const SocialImg = styled.img`
  width: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 800px) {

  }

  @media (min-width: 1200px) {

  }
`;

export const FooterP = styled.p`
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    
  }
`;
