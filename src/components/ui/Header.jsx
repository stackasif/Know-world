import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Header() {

const [menu,setMenu] = useState(false)

return (

<header className="bg-neutral-800 text-white h-[70px] p-4">

<div className="flex justify-between items-center max-w-[1200px] mx-auto">

{/* Logo */}
<NavLink to="/">
<h1 className="text-xl font-bold">OurWorld</h1>
</NavLink>


{/* Desktop Menu */}
      <nav className="hidden md:block">
          <ul className="flex gap-8">

            <li><NavLink to="/" className={({isActive}) => isActive ? "text-red-500" : ""}>
              Home
              </NavLink>
            </li>

            <li><NavLink to="/about" className={({isActive}) => isActive ? "text-red-500" : ""}>
              About
              </NavLink>
            </li>

            <li><NavLink to="/country" className={({isActive}) => isActive ? "text-red-500" : ""}>
              Country
              </NavLink>
            </li>

            <li><NavLink to="/india" className={({isActive}) => isActive ? "text-red-500" : ""}>
              India
              </NavLink>
            </li>

            <li><NavLink to="/contact" className={({isActive}) => isActive ? "text-red-500" : ""}>
              Contact
              </NavLink>
            </li>

          </ul>
      </nav>


{/* Mobile Menu Button */}
<div className="md:hidden text-2xl cursor-pointer" onClick={()=>setMenu(true)}>
<FaBarsStaggered />
</div>

</div>


{/* Overlay */}
{menu && (<div className="fixed inset-0 bg-black/50" onClick={()=>setMenu(false)}></div>)}


{/* Mobile Sidebar */}
    <div className={`fixed top-0 right-0 h-screen w-[70%] bg-gray-900 transform transition-transform duration-300 ${menu ? "translate-x-0" : "translate-x-full"}`}>

      <div className="p-4 text-3xl cursor-pointer" onClick={()=>setMenu(false)}>
      <IoClose/>
      </div>

        <nav>
          <ul className="flex flex-col items-center gap-8 mt-10 text-lg">

          <li><NavLink to="/" onClick={()=>setMenu(false)}>Home</NavLink></li>

          <li><NavLink to="/about" onClick={()=>setMenu(false)}>About</NavLink></li>

          <li><NavLink to="/country" onClick={()=>setMenu(false)}>Country</NavLink></li>

          <li><NavLink to="/india" onClick={()=>setMenu(false)}>India</NavLink></li>

          <li><NavLink to="/contact" onClick={()=>setMenu(false)}>Contact</NavLink></li>

          </ul>
        </nav>

      </div>

</header>

)

}

export default Header;