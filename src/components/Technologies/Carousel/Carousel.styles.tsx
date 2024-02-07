import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const TagsContainer = styled.div`
  overflow: hidden;
  padding: 50px 0 15px;
  background: white;
  white-space: nowrap;
  position: relative;
  width: 100%;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 1;
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }

  &:hover .tags-slide {
    animation-play-state: paused;
  }
`;

export const TagsSlide = styled.div`
  display: inline-block;
  animation: ${slideAnimation} 20s infinite linear;
`;

export const TagButton = styled.button`
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  border: none;
  color: #FFFF;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  padding: 5px;
  width: 200px;
  margin: 0 7px;
`;
