/* eslint-disable react/prop-types */
export default function Project({ name, sub, tech, desc }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{sub}</h4>
      <ul>
        {tech.map((row) => {
          return <li>{row}</li>;
        })}
      </ul>
      <p>{desc}</p>
      <img href="https://react-leaflet.js.org/img/logo-title.svg" alt="" />
      <button type="button">View on gitHub</button>
    </div>
  );
}
