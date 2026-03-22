import React from "react";
import Header from "@widgets/header/Header";
import Footer from "@widgets/footer/Footer";

type TLayoutProps = {
    children: React.ReactNode;
}

 const Layout = ({children}: TLayoutProps) => {
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }

    export default Layout;
