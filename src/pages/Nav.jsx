import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { useContext, useEffect, useState } from "react";
import { RiBuilding2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const Nav = () => {
  
  const {user, logOut} = useContext(AuthContext)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector('html').setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeToogle = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('html').setAttribute('data-theme', newTheme);
  };

  // console.log(theme,'theme')

 
    const navLink = <>
    <li className="mr-4 font-semibold"><NavLink to='/'>Home</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/allArt'>All Art & Craft Items</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/addCraft'>Add Craft Item</NavLink></li>
    <li className="mr-4 font-semibold"><NavLink to='/myCraft'>My Art & Craft List</NavLink></li>
</>

const handleLogOut =()=>{
  logOut()
  toast('log Out')
}

  return (
    <div className="bg-[#273c48] text-white py-3 ">
        <div  className="navbar max-w-[98%] mx-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-gray-800 rounded-box w-52"
          >
         {navLink}
          </ul>
        </div>
        <a  className="md:text-2xl lg:text-2xl font-bold">ARTISAN</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 ">
        {navLink}
        </ul>
      </div>
      <div className="navbar-end">
    {/* toagle */}

    <label className="cursor-pointer mr-2 md:mr-5 lg:mr-5 grid place-items-center">
    <input
              onChange={handleThemeToogle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              checked={theme === 'dark'}
            />
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

        {/* avatar */}
        {
          user ?   <>
          <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <div tabIndex={0} role="button" className="">  
                  <div className="avatar">
                      <div className="w-12 mt-3 rounded-full text-black">
                      <img src={user.photoURL} />
                      </div>
                  </div>
                  </div>
              </div>
           <button onClick={handleLogOut} className="btn bg-[#fb8053] border-none ml-4 font-bold px-4">Logout</button>
           </> :  <><Link to='/login'><button className="btn bg-[#13e5c0] border-none">LOGIN</button></Link>
                    <Link to='/register'><button className="btn bg-[#BACD92] ml-2 border-none">Register</button></Link>
                    </>
        }
    
        {/* avatar */}

      </div>
    </div>
    </div>
  );
};

export default Nav;



{/* <Link to='/login'><button className="btn btn-primary">Login</button></Link>
<Link to='/register'><button className="btn btn-secondary">Register</button></Link> */}