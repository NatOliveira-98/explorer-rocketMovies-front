import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { CreateMovie } from '../pages/CreateMovie';
import { EditMovie } from '../pages/EditMovie';
import { MoviePreview } from '../pages/MoviePreview';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/movies/create" element={<CreateMovie />} />
      <Route path="/movies/edit/:id" element={<EditMovie />} />
      <Route path="/movies/preview/:id" element={<MoviePreview />} />
    </Routes>
  );
};
