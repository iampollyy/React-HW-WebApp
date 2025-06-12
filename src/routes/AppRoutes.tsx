import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@hooks";

import { LoginPage } from "@pages";
import { HomePage } from "@pages";
import { MenuPage } from "@pages";

function AppRoutes() {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>; // можно кастомный loader

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/login"
                element={user ? <Navigate to="/menu" replace /> : <LoginPage />}
            />
            <Route
                path="/menu"
                element={user ? <MenuPage /> : <Navigate to="/login" replace />}
            />
        </Routes>
    );
}
export default AppRoutes;
