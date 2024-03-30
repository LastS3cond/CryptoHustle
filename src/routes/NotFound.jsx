import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 style={{ color: "white" }}>There's nothing here!</h1>
            <Link style={{ color: "white", border: "white", borderStyle: "solid" }} to="/">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;