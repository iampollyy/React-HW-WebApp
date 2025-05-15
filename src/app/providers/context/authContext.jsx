import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@config/firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
