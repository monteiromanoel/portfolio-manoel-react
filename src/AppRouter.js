import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";

const Home = () => <div> Home </div>;
const About = () => <div> About </div>;
const Projects = () => <div> Projects </div>;
const Contact = () => <div> Contact </div>;

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};