import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import Load from './components/Loader';

const Layout = lazy(() => import('./components/Layout'));

const Home = lazy(() => import('./pages/Home'));

const Movies = lazy(() => import('./pages/Movies'));

const Cast = lazy(() => import('./pages/AboutMovie/Casts'));

const Reviews = lazy(() => import('./pages/AboutMovie/Reviews'));

const AboutMovie = lazy(() => import('./pages/AboutMovie/Movie'));

function App() {
  const scrollRef = useRef();
  return (
    <>
      <Suspense fallback={<Load />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Toaster />
              </Layout>
            }
          >
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<AboutMovie scrollRef={scrollRef} />}>
              <Route path="cast" element={<Cast scrollRef={scrollRef} />} />
              <Route path="reviews" element={<Reviews scrollRef={scrollRef} />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
