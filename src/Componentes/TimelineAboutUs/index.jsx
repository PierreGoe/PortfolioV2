import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ahk from '../../Assets/icon_main_64.png';
import sm from '../../Assets/SM_logo.png';
import python from '../../Assets/Python_logo.png';
import './style.sass';

export default function TimelineAboutUs() {
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
          Organisme : Wild Code School - boot camp 5 mois
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          Langage : Node.js, Express, React, MySQL
        </h4>

        <p>
          Formation développeur Web intensive,&nbsp;la formation s’articule de
          manière AGILE autour de :
        </p>
        <section className="list">
          <ul>
            <li>
              3 projets de site Web, 2 fictifs, 1 troisième pour un porteur de
              projet.
            </li>
            <li>2 hackathons de 48 h - Partenariat avec ManoMano</li>
            <li>
              Plusieurs dizaines d’heures de cours sur les technologies en cours
              d’apprentissage assurer par un formateur.
            </li>
          </ul>
        </section>
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
        <section className="list">
          <h4>Type de projet</h4>
          <ul>
            <li>Web scrapting avec Sélénium et BeautifulSoupe</li>
            <li>Script avec PyAutoGUI Windows</li>
            <li>Jeux vidéo avec PyGame </li>
          </ul>
        </section>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: mainColor }}
        contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
        date="2013"
        iconStyle={{ background: '#e5e5e5' }}
        icon={Image(ahk, 'AHK icone', 'icone')}
      >
        <h3 className="vertical-timeline-element-title">
          Script plus Complexe
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Outil : AHK </h4>
        <section>
          Utilisation d’
          <a
            href="https://www.autohotkey.com/"
            target="_blank"
            rel="noreferrer"
          >
            AutoHotKey
          </a>
          , c’est un langage open source permettant d’écrire des scripts pour
          Windows, cet outil a la particularité de ne pas avoir besoin des
          droits administrateurs pour être exécuté.
        </section>
        <section className="list">
          <h4>Type de projet</h4>
          <ul>
            <li>
              Scripts d’automatisation de tâches rébarbatif sur les logiciels
              interne
            </li>
            <li>Raccourci clavier custom</li>
          </ul>
        </section>
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
            &nbsp;SuperMacro&nbsp;
          </a>
          les premiers scripts consisté à se déplacer dans un jeu, réagir à des
          événements apparaissant sur l’écran…
        </p>
        <section className="list">
          <h4>Type de projet</h4>
          <ul>
            <li>
              Déplacer automatique dans un jeu, réagir à des événements
              apparaissant sur l’écran, connexion automatique de plusieurs
              comptes.
            </li>
          </ul>
        </section>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
