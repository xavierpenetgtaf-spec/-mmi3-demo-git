
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |
        <Link to="/taches">Tâches</Link> |
        <Link to="/apropos">À propos</Link>
      </nav>
      <hr />
      <Outlet /> {}
    </div>
  );
}
