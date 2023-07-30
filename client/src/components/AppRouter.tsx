import { Routes, Route, redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
function AppRouter() {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
    </Routes>
  );
}

export default AppRouter;
