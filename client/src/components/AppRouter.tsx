import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import NotFound from '../pages/NotFound';
import { useContext } from 'react';
import { Context } from '../main';
function AppRouter() {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path={'*'} element={<NotFound></NotFound>} />
      <Route />
    </Routes>
  );
}

export default AppRouter;
