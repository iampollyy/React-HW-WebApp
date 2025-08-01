import { Routes, Route, Navigate } from "react-router-dom";
import  routes  from "@config/routesConfig";
import  useAppSelector  from "@hooks/useAppSelector";
import  PrivateRoute  from "@router/PrivateRoute";

function AppRoutes() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Routes>
      {routes.map(({ path, element, isPrivate }) =>
        isPrivate ? (
          <Route key={path} element={<PrivateRoute />}>
            <Route path={path} element={element} />
          </Route>
        ) : path === "/login" ? (
          <Route
            key={path}
            path={path}
            element={user ? <Navigate to="/menu" replace /> : element}
          />
        ) : (
          <Route key={path} path={path} element={element} />
        )
      )}
    </Routes>
  );
}

export default AppRoutes;
