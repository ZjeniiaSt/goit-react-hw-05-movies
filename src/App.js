import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import AboutMovie from './pages/AboutMovie/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/" element={<AboutMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
