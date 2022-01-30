import './style.sass';
import { Link } from 'react-router-dom';

export default function NavHeaderBar() {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link id="home" className="menuItem" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/aboutus">A propos</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/misc">Autre</Link>
        </li>
      </ul>
    </nav>
  );
}
