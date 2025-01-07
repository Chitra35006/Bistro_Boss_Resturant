import { Outlet } from "react-router-dom";
import Footer from "../components/Pages/Shared/Footer";
import NavBar from "../components/Pages/Shared/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;