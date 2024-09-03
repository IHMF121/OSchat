import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Home;
