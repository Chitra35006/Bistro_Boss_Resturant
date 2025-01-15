import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Pages/Shared/Footer";
import NavBar from "../components/Pages/Shared/NavBar";

const MainLayout = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
        { noHeaderFooter || <NavBar></NavBar>}
        <Outlet></Outlet>
        { noHeaderFooter || <Footer></Footer>}
    </div>
    );
};

export default MainLayout;