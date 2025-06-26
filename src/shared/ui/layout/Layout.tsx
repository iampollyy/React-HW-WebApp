import React from "react";
import Header from "@widgets/header/Header";
import Footer from "@widgets/footer/Footer";



 const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }

    export default Layout;
