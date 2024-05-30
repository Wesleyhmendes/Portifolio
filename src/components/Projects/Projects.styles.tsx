/* eslint-disable max-lines */
import styled from 'styled-components';

export const ProjectSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1em;

  h1 {
    color: #FF3838;
    font-size: 30px;
    font-weight: 800;
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  gap: 1rem;
  width: 97%;
  margin-bottom: 3rem;

  img { display: none; }

  div {
    h2 {
      color: #333;
      font-weight: 600;
    }

    div {
      display: flex;
      flex-direction: column;

      h4 {
        color: #333;
        font-weight: 600;
      }

      .tags-div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      .front-end-tag,
      .backend-tag,
      .fullstack-tag {
        background-color: transparent;
        border: none;
        color: #FF3838;
        font-weight: 700;
      }

      .front-end-tag { color: #FF3838; }
      .backend-tag { color: #6D4EED; }
      .fullstack-tag { color: #1338da; }

      .react-tag,
      .ts-tag,
      .node-tag,
      .java-tag,
      .docker-tag,
      .php-laravel-tag {
        border: none;
        border-radius: 1rem;
        font-weight: 500;
        padding: 0rem 1rem;
        color: #fff;
      }

      .react-tag {
        background-color: #5ED3F3;
      }

      .ts-tag {
        background-color: #2F74C0;

      }

      .node-tag {
        background-color: #8BBF3D;

      }

      .java-tag {
        background-color: #EA6E08;
      }

      .docker-tag {
        background-color: #0997E5;
      }

      .php-laravel-tag {
        background-color: #ff2104;
      }
    }
    
    .acessar-projeto {
      background-color: #FF3838;
      box-shadow: 2px 1px 2px 0px rgba(68, 68, 68, 0.3);
      border: none;
      border-radius: 0.5rem;
      color: #ffffff;
      font-weight: 600;
      margin-top: 1rem;
      padding: 0.3rem 0.7rem;
      text-align: center;

      &:hover {
        background-color: #ff1313;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
    .img-div {
      max-width: 25%;
      min-width: 25%;

      .iphone-pic {
        display: inline;
        height: fit-content;
        width: 100%;
      }
      
      .mac-pic {
        display: inline;
        height: fit-content;
        width: 100%;
      }
    }
  }

  @media (min-width: 1280px) {
    width: 60%;

      .img-div {
        max-width: 15%;
        min-width: 15%;


        .iphone-pic {
          display: inline;
          height: fit-content;
        }
        
        .mac-pic {
          display: inline;
          height: fit-content;
        }
      }
    }
`;
