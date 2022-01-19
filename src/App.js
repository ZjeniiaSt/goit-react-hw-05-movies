import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">HONE</Link>
        <Link to="movies">MOVIES</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
