import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('./Home/Home'));
const HeroPage = lazy(() => import('./HeroPage/HeroPage'));
const Header = lazy(() => import('./Header/Header'));
const Gallery = lazy(() => import('./Gallery/Gallery'));

export const App = () => {
  return (
    <BrowserRouter basename="/superheroes-client">
      <Suspense fallback={'Download...'}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/:heroId" element={<HeroPage />} />
            <Route path="/:heroId/avatars" element={<Gallery />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
