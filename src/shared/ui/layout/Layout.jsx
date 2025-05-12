import {Header} from "@widgets/Header/Header.jsx";
import {Footer} from "@widgets/footer/Footer.jsx";

export const Layout = ({children}) => {
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }
