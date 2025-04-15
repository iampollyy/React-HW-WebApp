import {Component} from "react";

import {Header} from "@widgets/Header/Header.jsx";
import {Footer} from "@widgets/footer/Footer.jsx";

export class Layout extends Component{
    render() {
        const {children} = this.props;
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }
}