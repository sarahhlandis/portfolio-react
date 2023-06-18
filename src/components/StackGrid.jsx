import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import JavaScriptIcon from '../assets/JavaScriptIcon';
import HTMLIcon from '../assets/HTMLIcon';
import JSXIcon from '../assets/JSXIcon';
import BashIcon from '../assets/BashIcon';
import MarkdownIcon from '../assets/MarkdownIcon';
import FlaskIcon from '../assets/FlaskIcon';
import ExpressJSIcon from '../assets/ExpressJSIcon';
import NextJSIcon from '../assets/NextJSIcon';
import PytestIcon from '../assets/PytestIcon';
import JestIcon from '../assets/JestIcon';
import NodeJSIcon from '../assets/NodeJSIcon';
import VSCodeIcon from '../assets/VSCodeIcon';
import PSQLIcon from '../assets/PSQLIcon';
import MongoDBIcon from '../assets/MongoDBIcon';
import CSSIcon from '../assets/CSSIcon';
import SCSSIcon from '../assets/SCSSIcon';
import TailwindIcon from '../assets/TailwindIcon';
import GitIcon from '../assets/GitIcon';
import InsomniaIcon from '../assets/InsomniaIcon';
import FigmaIcon from '../assets/FigmaIcon';
 


const iconComponents = [
  {
    component: <FontAwesomeIcon icon={faPython} style={{ color: '#fdba74' }} />,
    label: 'Python',
  },
  {
    component: <JavaScriptIcon style={{ fill: '#fdba74' }}/>,
    label: 'Javascript',
  },
  {
    component: <JSXIcon />,
    label: 'JSX',
  },
  {
    component: <FontAwesomeIcon icon={faReact} style={{ color: '#fdba74' }} />,
    label: 'React',
  },
  {
    component: <HTMLIcon />,
    label: 'HTML',
  },
  {
    component: <BashIcon />,
    label: 'Bash',
  },
  {
    component: <MarkdownIcon />,
    label: 'Markdown',
  },
  {
    component: <FlaskIcon />,
    label: 'Flask',
  },
  {
    component: <ExpressJSIcon />,
    label: 'Express',
  },
  {
    component: <NextJSIcon />,
    label: 'Next',
  },
  {
    component: <PytestIcon />,
    label: 'Pytest',
  },
  {
    component: <JestIcon />,
    label: 'Jest',
  },
  {
    component: <InsomniaIcon />,
    label: 'Insomnia',
  },
  {
    component: <NodeJSIcon />,
    label: 'NodeJS',
  },
  {
    component: <VSCodeIcon />,
    label: 'VSCode',
  },
  {
    component: <PSQLIcon />,
    label: 'PostgreSQL',
  },
  {
    component: <MongoDBIcon />,
    label: 'MongoDB',
  },
  {
    component: <CSSIcon />,
    label: 'CSS',
  },
  {
    component: <SCSSIcon />,
    label: 'Sass',
  },
  {
    component: <TailwindIcon />,
    label: 'Tailwind',
  },
  {
    component: <FigmaIcon />,
    label: 'Figma',
  },
  {
    component: <GitIcon />,
    label: 'Git',
  },
  // Add more icon components here
];

function StackGrid() {
  return (
    <div className="text-5xl grid grid-cols-5 gap-4 ">
      {iconComponents.map(({ component, label }) => (
        <div key={label} className="flex flex-col items-center hover:scale-125 ease-out duration-300">
          {component}
          <p className="text-xs text-orange-300">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default StackGrid;
