import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

import { LoginPage } from "@pages/loginPage/loginPage";
import { HomePage } from "@pages/homePage/HomePage";
import { MenuPage } from "@pages/menuPage/MenuPage";

export function AppRoutes() {
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
