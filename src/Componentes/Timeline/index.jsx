/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ahk from '../../Assets/icon_main_64.png';
import sm from '../../Assets/SM_logo.png';
import python from '../../Assets/Python_logo.png';

export default function Timeline() {
  function Image(src, alt, className) {
    return (
      <>
        <img src={src} alt={alt} className={className} />
      </>
    );
  }
  const mainColor = 'rgb(255, 255, 255)';
  return (
    <VerticalTimeline lineColor="black">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: mainColor }}
        contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
        date="sept. 2021"
        iconStyle={{ background: '#e5e5e5' }}
        icon={Image(
          'https://img.icons8.com/plasticine/100/000000/react.png',
          'test',
          'icone'
        )}
      >
        <h3 className="vertical-timeline-element-title">
          Reconversion professionnelle, Web développeur
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Organisme: Wild Code School - boot Camp 5 mois
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          Langage : Node.js, Express, React, MySQL
        </h4>

        <p>Reconversion</p>
        <p>
          Formation développeur Web intensive, La formation s’articule de
          manière AGILE autour de :
        </p>
        <ul>
          <li>
            3 projet de site Web, 2 fictif, 1 troisième pour un porteur de
            projet.
          </li>
          <li>2 hackathon de 48h - Partenaria avec MANOMANO</li>
          <li>
            Plusieurs dizaines d’heures de cours sur les technologies en cours
            d’apprenticage assurer par un formateur.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: mainColor }}
        contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
        date="2019"
        iconStyle={{ background: '#e5e5e5' }}
        icon={Image(python, 'test', 'icone')}
      >
        <h3 className="vertical-timeline-element-title">Le premier langage</h3>
        <h4 className="vertical-timeline-element-subtitle">Outil : Python </h4>
        <p>
          Apprentissage de Python sur mon temps libre avec comme documentation
          des vidéos YouTube et Tutoriel OpenClassrooms
        </p>
        <p>
          <h4>Type de projet</h4>
          <ul>
            <li>Web scrapting avec Ssélénium et BeautifulSoupebeautiful</li>
            <li>Script avec PyAutoGUI Windows</li>
            <li>Jeux vidéo avec PyGame </li>
          </ul>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: mainColor }}
        contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
        date="2013"
        iconStyle={{ background: '#e5e5e5' }}
        icon={Image(ahk, 'test', 'icone')}
      >
        <h3 className="vertical-timeline-element-title">
          Script plus Complexe
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Outil : AHK </h4>
        <p>
          Utilisation d’
          <a
            href="https://www.autohotkey.com/"
            target="_blank"
            rel="noreferrer"
          >
            AutoHotKey
          </a>
          , c’est un langage open source permettant d’écrire des script pour
          Windows, cette outil a la particularité de ne pas avoir besoin des
          droits administrateurs pour être exécuté.
        </p>
        <p>
          <h4>Type de projet</h4>
          <ul>
            <li>
              Scripts d’automatisation de tâches rébarbatif sur les logiciels
              interne
            </li>
            <li>Raccourci clavier custome</li>
          </ul>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: mainColor }}
        contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
        date="2011"
        iconStyle={{ background: '#e5e5e5' }}
        icon={Image(sm, 'test', 'icone')}
      >
        <h3 className="vertical-timeline-element-title">Premiere Script</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Outil : Super Macro
        </h4>
        <p>
          Premier apprentissage de l’algorithme en autodidacte avec le logiciel
          <a
            href="https://www.supermacro.fr/description.php"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;SuperMacro
          </a>
          les premier script consisté à se déplacer dans un jeu, réagir à des
          événements apparaissant sur l’écran…
        </p>
        <p>
          <h4>Type de projet</h4>
          <ul>
            <li>
              Déplacer automatique dans un jeu, réagir à des événements
              apparaissant sur l’écran, connection automatique de plusieur
              compte.
            </li>
          </ul>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
