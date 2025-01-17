import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
   const {user,logOut} = useContext(AuthContext);
   const[isAdmin] = useAdmin();

   const [cart] = useCart();

   const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

    const navOptions = 
    <>
    <li className="bg-transparent hover:bg-red-700 transition duration-300">
      <NavLink to="/" className="bg-transparent">HOME</NavLink>
    </li>
    <li className="bg-transparent hover:bg-red-700 transition duration-300">
      <NavLink to="/menu" className="bg-transparent">OUR MENU</NavLink>
    </li>
    <li className="bg-transparent hover:bg-red-700 transition duration-300">
      <NavLink to="/orderFood/salad" className="bg-transparent">Order</NavLink>
    </li>
    <li className="bg-transparent hover:bg-red-700 transition duration-300">
      <NavLink to="/secret" className="bg-transparent">Secret</NavLink>
    </li>
    {
            // user ? 'true': 'false'
            // user ? condition ? 'double true' : 'one true' : 'false' 
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
    <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
    {user ? (
      <>
        {/* Uncomment the next line to display the user's name */}
        {/* <span>{user?.displayName}</span> */}
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </>
    ) : (
      <li className="bg-transparent hover:bg-red-700 transition duration-300">
        <NavLink to="/login" className="bg-transparent">Login</NavLink>
      </li>
    )}
  </>
  return (
    <>
      <div className="max-w-screen-xl mx-auto navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-transparent"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-transparent">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
