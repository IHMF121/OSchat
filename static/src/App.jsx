// import "./components/Header/Header";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registartion";
import Login from "./components/Login/Login";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
