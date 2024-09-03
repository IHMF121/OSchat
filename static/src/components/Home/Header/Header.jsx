import "react";
import Nav from "../Nav/Nav";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo">
                        OSchat
                    </a>
                    <Nav/>
                </div>
            </div>
        </header>
    );
}

export default Header;
