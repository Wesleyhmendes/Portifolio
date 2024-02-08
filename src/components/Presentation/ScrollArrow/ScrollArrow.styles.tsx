import styled, { keyframes } from 'styled-components';

const jumpAnimation = keyframes`
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 20px;
  }
  100% {
    margin-top: 0;
  }
`;

export const DownArrow = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    top: calc(100vh - 80px);
    left: calc(50% - 14px);
    width: 0;
    height: 30px;
    border: 2px solid;
    border-radius: 2px;
    animation: ${jumpAnimation} 1.5s infinite;
  }
`;

export const ArrowHead = styled.div`
  @media (min-width: 1200px) {
    content: " ";
    position: absolute;
    top: 12px;
    left: -8px;
    width: 16px;
    height: 16px;
    border-bottom: 4px solid;
    border-right: 4px solid;
    border-radius: 4px;
    transform: rotateZ(45deg);
  }
`;
