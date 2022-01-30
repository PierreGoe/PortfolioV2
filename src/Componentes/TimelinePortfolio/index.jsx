import Project from 'Componentes/Project';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
        <Project name="a" sub="a" tech={['a']} desc="a" />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
