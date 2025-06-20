import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@config";
import { useAppSelector } from "@hooks";
import { PrivateRoute } from "@router";

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
