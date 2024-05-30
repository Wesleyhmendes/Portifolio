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

  @media (min-width: 1280px) { img { width: 100%; } }
`;

export const PresentationDiv = styled.div`
  @media (min-width: 320px) {
    width: 95%;
    margin: 0 auto;

    h2 {
      color: #FF3838;
      font-weight: 500;
      font-size: 1.5rem;
    }

    h1 {
      color: #FF3838;
      font-weight: 800;
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    h2 {
      color: #FF3838;
      font-weight: 500;
      font-size: 2rem;
    }

    h1 {
      color: #FF3838;
      font-weight: 800;
      font-size: 2.8rem;
    }
  }

  @media (min-width: 1280px) {
    h2 {
      color: #FF3838;
      font-weight: 500;
      font-size: 2rem;
    }

    h1 {
      color: #FF3838;
      font-weight: 800;
      font-size: 4rem;
    }
  }
`;

export const PresentationButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  margin-left: 1.5rem;

  button {
    background-color: #FF3838;
    box-shadow: 2px 1px 2px 0px rgba(68, 68, 68, 0.3);
    border: none;
    border-radius: 7px;
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
