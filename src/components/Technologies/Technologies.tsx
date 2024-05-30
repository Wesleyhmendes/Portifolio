import { useState } from 'react';
import react from '../../assets/languages/front/react.png';
import js from '../../assets/languages/front/javascript.png';
import ts from '../../assets/languages/front/typescript.png';
import css from '../../assets/languages/front/css.png';
import redux from '../../assets/languages/front/redux.png';
import bst from '../../assets/languages/front/bootstrap.png';
import next from '../../assets/languages/front/nextjs.png';
import tailwind from '../../assets/languages/front/tailwind.png';

import node from '../../assets/languages/back/nodejs.png';
import python from '../../assets/languages/back/python.png';
import postgre from '../../assets/languages/back/postgre.png';
import docker from '../../assets/languages/back/docker.png';
import mysql from '../../assets/languages/back/mysql.png';
import laravel from '../../assets/languages/back/laravel.png';
import php from '../../assets/languages/back/php.png';
import java from '../../assets/languages/back/java.png';

import {
  TechSection,
  TechButtonDiv,
  TechDivIconsOutsideFront,
  TechDivIconsOutsideBack,
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

      <h1>Linguagens e tecnologias</h1>

      <TechButtonDiv>
        <button
          className={ clickedFront ? 'on' : 'off' }
          onClick={ () => handleClick('front') }
        >
          front-end
        </button>
        <button
          className={ clickedBack ? 'on' : 'off' }
          onClick={ () => handleClick('back') }
        >
          back-end
        </button>

      </TechButtonDiv>

      <TechDivIconsOutsideFront className={ clickedFront ? 'on' : 'off' }>

        <div>
          <img src={ next } alt="ícone  next" />
          <p>Next.js</p>
        </div>

        <div>
          <img src={ react } alt="ícone  react" />
          <p>React.js</p>
        </div>

        <div>
          <img src={ js } alt="ícone  javascript" />
          <p>JavaScript</p>
        </div>

        <div>
          <img src={ ts } alt="ícone  typescript" />
          <p>TypeScript</p>
        </div>

        <div>
          <img src={ tailwind } alt="ícone  tailwind" />
          <p>Tailwind</p>
        </div>

        <div>
          <img src={ bst } alt="ícone bootstrap" />
          <p>Bootstrap</p>
        </div>

        <div>
          <img src={ css } alt="ícone css" />
          <p>CSS</p>
        </div>

        <div>
          <img src={ redux } alt="ícone  redux" />
          <p>Redux</p>
        </div>

      </TechDivIconsOutsideFront>

      <TechDivIconsOutsideBack className={ clickedBack ? 'on' : 'off' }>

        <div>
          <img className="java" src={ java } alt="ícone  Java" />
          <p>Java</p>
        </div>

        <div>
          <img className="node" src={ node } alt="ícone  Node js" />
          <p>Node.js</p>
        </div>

        <div>
          <img className="laravel" src={ laravel } alt="ícone  laravel" />
          <p>Laravel</p>
        </div>

        <div>
          <img className="php" src={ php } alt="ícone  php" />
          <p>Php</p>
        </div>

        <div>
          <img src={ python } alt="ícone  Python" />
          <p>Python</p>
        </div>

        <div>
          <img src={ postgre } alt="ícone  PostgreSQL" />
          <p>PostgreSQL</p>
        </div>

        <div>
          <img src={ mysql } alt="ícone  MySQL" />
          <p>MySQL</p>
        </div>

        <div>
          <img src={ docker } alt="ícone Docker" />
          <p>Docker</p>
        </div>

      </TechDivIconsOutsideBack>
      <h2>
        Outras skills
      </h2>
      <Carousel />

    </TechSection>
  );
}

export default Technologies;
