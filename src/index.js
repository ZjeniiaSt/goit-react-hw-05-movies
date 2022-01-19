import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
