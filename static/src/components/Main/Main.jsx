import "react";
import Aside from "../Aside/Aside";
import Chat from "../Chat/Chat";

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <Aside />
                    <Chat />
                </div>
            </div>
        </main>
    );
}
export default Main;
