import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AboutArticle from 'Componentes/AboutArticle';
import ahk from '../../Assets/icon_main_64.png';
import sm from '../../Assets/SM_logo.png';
import python from '../../Assets/Python_logo.png';
import './style.sass';

export default function TimelineAboutUs() {
  return (
    <VerticalTimeline lineColor="black">
      <AboutArticle
        title="Reconversion professionnelle, Web développeur"
        sub="Wild Code School - boot camp 5 mois"
        tech={['Node.js', 'Express', 'React', 'MySQL']}
        desc="Formation développeur Web intensive,&nbsp;la formation s’articule de
        manière AGILE"
        keyPoint={[
          '3 projets de site Web, 2 fictifs, 1 troisième pour un porteur de projet.',
          '2 hackathons de 48 h - Partenariat avec ManoMano.',
          'Plusieurs dizaines d’heures de cours sur les technologies en cours d’apprentissage assurer par un formateur.',
        ]}
        icon="https://img.icons8.com/plasticine/100/000000/react.png"
        date="sept - 2021"
      />
      <AboutArticle
        title="Apprentissage de Python"
        sub="Premier langage"
        tech={['Python']}
        desc="Apprentissage de Python sur mon temps libre avec comme documentation
        des vidéos YouTube et Tutoriel OpenClassrooms"
        keyPoint={[
          'Web scrapting avec Sélénium et BeautifulSoupe.',
          'Script avec PyAutoGUI Windows.',
          'Jeux vidéo avec PyGame.',
        ]}
        icon={python}
        date="2019"
      />
      <AboutArticle
        title=" Script plus Complexe"
        sub=""
        tech={['AHK']}
        desc="Utilisation d’AutoHotKey,&nbsp;c’est un langage open source permettant d’écrire des scripts pour
        Windows,&nbsp;cet outil a la particularité de ne pas avoir besoin des droits administrateurs pour être exécuté."
        keyPoint={[
          'Scripts d’automatisation de tâches rébarbatif sur les logiciels interne.',
          'Raccourci clavier custom.',
        ]}
        icon={ahk}
        date="2013"
      />
      <AboutArticle
        title="Premiere Script"
        sub=""
        tech={['Super Macro']}
        desc="          Premier apprentissage de l’algorithme en autodidacte avec le logiciel."
        keyPoint={[
          ' Déplacement automatique dans un jeu, réagir à des événements apparaissant sur l’écran, connexion automatique de plusieurs comptes.',
        ]}
        icon={sm}
        date="2011"
      />
    </VerticalTimeline>
  );
}
