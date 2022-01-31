import Project from 'Componentes/Project';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './style.sass';

export default function TimelineAboutUs() {
  return (
    <VerticalTimeline lineColor="black">
      <Project
        key="1"
        name="eQAI"
        sub="Map interactive Leaflet"
        tech={['React', 'Leaflet']}
        desc=" Projet pédagogique n°3 de la Wild Code School, Site Web pour l'association eQAI, Affichage des données mise à disposition par  l'API CRUD eQai."
        linkCode="https://github.com/WildCodeSchool/p3-g2-sept21-lille-reactJs-eQay-frontend"
        link="https://github.com/WildCodeSchool/p3-g2-sept21-lille-reactJs-eQay-frontend"
        icon="https://img.icons8.com/plasticine/100/000000/react.png"
        date="decembre - 2021"
      />
      <Project
        key="2"
        name="eQAI - API"
        sub="API pour eQAI"
        tech={['Node.js', 'Express', 'MySQL', 'Firebase']}
        desc=" Projet pédagogique n°3 de la Wild Code School, API CRUD regroupant des capteurs extérieur fourni par Atmos France, ainsi que les données des capteurs intérieur de la startup `Le Capteur Français` ces données sont agrégées dans une base de données MySQL."
        linkCode="https://github.com/WildCodeSchool/p3-g2-sept21-lille-eQay-backend"
        link={null}
        icon="https://img.icons8.com/windows/32/000000/nodejs.png"
        date="decembre - 2021"
      />
    </VerticalTimeline>
  );
}
