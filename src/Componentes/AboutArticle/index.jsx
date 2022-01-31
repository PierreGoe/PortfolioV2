/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './styles.sass';

export default function AboutArticle({
  title,
  sub,
  tech,
  desc,
  icon,
  keyPoint,
  date,
}) {
  const mainColor = 'rgb(255, 255, 255)';
  function Image(alt, className) {
    return (
      <>
        <img src={icon.toString()} alt={alt} className={className} />
      </>
    );
  }
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
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: mainColor }}
      contentArrowStyle={{ borderRight: `7px solid  ${mainColor}` }}
      date={date}
      iconStyle={{ background: '#e5e5e5' }}
      icon={Image('logo of tech', 'icone')}
    >
      <div className="containerArticle">
        <h3 className="titleArticle">{title}</h3>
        <h4 className="subtitleArticle">{sub}</h4>
        <ul>
          {tech &&
            tech.map((row) => {
              return (
                <li key={row} className={`tech ${Color(row)}`}>
                  {row}
                </li>
              );
            })}
        </ul>
        <p className="descArticle">{desc}</p>
        <ul className="list">
          {keyPoint &&
            keyPoint.map((row) => {
              return <li>{row}</li>;
            })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}
