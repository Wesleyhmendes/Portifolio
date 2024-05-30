import styled from 'styled-components';

// Min screen = 480p
export const PresentationSection = styled.section`
  margin-top: 1em;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;

    .textBtn {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 5rem;
    width: 60%;
  }
`;

export const PresentationPictureDiv = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-bottom: 2rem;
    width: 90%;
  }
`;

export const PresentationDiv = styled.div`
  @media (min-width: 320px) {
    width: 95%;
    margin: 0 auto;

    h2 {
      color: #FF3838;
      font-weight: 500;
    }

    h1 {
      color: #FF3838;
      font-weight: 800;
    }
  }
`;

export const PresentationButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    background-color: #FF3838;
    box-shadow: 2px 1px 2px 0px rgba(68, 68, 68, 0.3);
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
  }
`;
