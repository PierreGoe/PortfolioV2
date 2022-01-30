import NavHeaderBar from '../../Componentes/NavHeaderBar';
import avatar from '../../Assets/avatar.png';
import './style.sass';

export default function HomePage() {
  return (
    <>
      <NavHeaderBar />
      <div className="container">
        <div className="bigTitle">
          <h1 className="">Pierre Goemans</h1>
          <p className="">Backend/Frontend Web Developer.</p>
        </div>

        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <section />
      </div>
    </>
  );
}
