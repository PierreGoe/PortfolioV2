/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './style.sass';
import logoGitHub from 'Assets/GitHub-Mark-64px.png';
import newTabIcon from 'Assets/new_tab_icon.svg';

export default function Project({
  name,
  sub,
  tech,
  desc,
  linkCode,
  link,
  icon,
}) {
  function Color(techName) {
    let color = '';
    switch (techName) {
      case 'React':
        color = 'blue';
        break;
      case 'Leaflet':
        color = 'green';
        break;
      case 'Node.js':
        color = 'yellow';
        break;
      case 'Express':
        color = 'black';
        break;
      case 'MySQL':
        color = 'red';
        break;

      default:
        break;
    }
    return color;
  }

  function Image(alt, className) {
    return (
      <>
        <img src={icon.toString()} alt={alt} className={className} />
      </>
    );
  }
  const mainColor = 'rgb(255, 255, 255)';
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: mainColor }}
      contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
      date="sept. 2021"
      iconStyle={{ background: '#e5e5e5' }}
      icon={Image('logo of tech', 'icone')}
    >
      <div className="containerProjet">
        <h3 className="titleProjet">{name}</h3>
        <h4 className="subtitleProjet">{sub}</h4>
        <ul>
          {tech.map((row) => {
            return (
              <li key={row} className={`tech ${Color(row)}`}>
                {row}
              </li>
            );
          })}
        </ul>
        <p className="descProjet">{desc}</p>
        <div className="containerButton">
          {linkCode && (
            <a href={linkCode}>
              <button type="button" alt="lien vers le projet Github">
                <img className="icon" src={logoGitHub} alt="gitHub icon" />
                Voir le code
              </button>
            </a>
          )}
          {link && (
            <a href={link}>
              <button type="button" alt="lien vers le Site">
                <img className="icon" src={newTabIcon} alt="new tab icon" />
                Voir le Site
              </button>
            </a>
          )}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
