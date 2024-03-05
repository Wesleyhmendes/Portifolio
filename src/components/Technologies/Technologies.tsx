import { useState } from 'react';
import react from '../../assets/languages/front/react js.png';
import js from '../../assets/languages/front/java-script-logo.png';
import ts from '../../assets/languages/front/typescript.png';
import css from '../../assets/languages/front/css-3.png';
import redux from '../../assets/languages/front/redux.png';
import bst from '../../assets/languages/front/bootstrap.png';

import node from '../../assets/languages/back/node js.png';
import python from '../../assets/languages/back/python.png';
import postgre from '../../assets/languages/back/postgre SQL.png';
import docker from '../../assets/languages/back/docker.png';
import mysql from '../../assets/languages/back/mysql.png';

import {
  TechSection,
  TechH1,
  TechSkillsH3,
  NodeImg,
  TechIconImg,
  TechButtonDiv,
  TechIconName,
  TechButton,
  TechDivIconsInsideFront,
  TechDivIconsOutsideFront,
  TechDivIconsOutsideBack,
  TechDivIconsInsideBack,
} from './Technologies.styles';
import Carousel from './Carousel/Carousel';

function Technologies() {
  const [clickedFront, setClickedFront] = useState(true);
  const [clickedBack, setClickedBack] = useState(false);

  function handleClick(button: string) {
    if (button === 'front') {
      setClickedBack(false);
      setClickedFront(true);
    }
    if (button === 'back') {
      setClickedBack(true);
      setClickedFront(false);
    }
  }

  return (
    <TechSection id="techSectionId">

      <TechH1>Linguagens e tecnologias</TechH1>

      <TechButtonDiv>

        <TechButton
          className={ clickedFront ? 'on' : 'off' }
          onClick={ () => handleClick('front') }
        >
          front-end
        </TechButton>
        <TechButton
          className={ clickedBack ? 'on' : 'off' }
          onClick={ () => handleClick('back') }
        >
          back-end
        </TechButton>

      </TechButtonDiv>

      <TechDivIconsOutsideFront className={ clickedFront ? 'on' : 'off' }>

        <TechDivIconsInsideFront>
          <TechIconImg src={ react } alt="ícone  react" />
          <TechIconName>React.js</TechIconName>
        </TechDivIconsInsideFront>

        <TechDivIconsInsideFront>
          <TechIconImg src={ js } alt="ícone  javascript" />
          <TechIconName>JavaScript</TechIconName>
        </TechDivIconsInsideFront>

        <TechDivIconsInsideFront>
          <TechIconImg src={ ts } alt="ícone  typescript" />
          <TechIconName>TypeScript</TechIconName>
        </TechDivIconsInsideFront>

        <TechDivIconsInsideFront>
          <TechIconImg src={ css } alt="ícone css" />
          <TechIconName>CSS</TechIconName>
        </TechDivIconsInsideFront>

        <TechDivIconsInsideFront>
          <TechIconImg src={ redux } alt="ícone  redux" />
          <TechIconName>Redux</TechIconName>
        </TechDivIconsInsideFront>

        <TechDivIconsInsideFront>
          <TechIconImg src={ bst } alt="ícone bootstrap" />
          <TechIconName>Bootstrap</TechIconName>
        </TechDivIconsInsideFront>

      </TechDivIconsOutsideFront>

      <TechDivIconsOutsideBack className={ clickedBack ? 'on' : 'off' }>

        <TechDivIconsInsideBack>
          <NodeImg className="node" src={ node } alt="ícone  Node js" />
          <TechIconName>Node.js</TechIconName>
        </TechDivIconsInsideBack>

        <TechDivIconsInsideBack>
          <TechIconImg src={ python } alt="ícone  Python" />
          <TechIconName>Python</TechIconName>
        </TechDivIconsInsideBack>

        <TechDivIconsInsideBack>
          <TechIconImg src={ postgre } alt="ícone  PostgreSQL" />
          <TechIconName>PostgreSQL</TechIconName>
        </TechDivIconsInsideBack>

        <TechDivIconsInsideBack>
          <TechIconImg src={ docker } alt="ícone Docker" />
          <TechIconName>Docker</TechIconName>
        </TechDivIconsInsideBack>

        <TechDivIconsInsideBack>
          <TechIconImg src={ mysql } alt="ícone  MySQL" />
          <TechIconName>MySQL</TechIconName>
        </TechDivIconsInsideBack>

      </TechDivIconsOutsideBack>
      <TechSkillsH3>
        Skills
      </TechSkillsH3>
      <Carousel />

    </TechSection>
  );
}

export default Technologies;
