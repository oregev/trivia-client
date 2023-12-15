import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout';
import { Home, Generate, Quiz, NotFound } from 'pages';

export const AppRouter = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="generate" element={<Generate />} />
      <Route path="quiz" element={<Quiz />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
