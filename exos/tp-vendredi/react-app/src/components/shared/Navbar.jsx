
import { Link } from "react-router-dom";



const Navbar = () => {
  
    return ( 
        <div className="bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-4 shadow">
          <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
            <div className="flex justify-between items-center">
                <Link className="text-white text-xl font-bold md:text-2xl" to={"/"}> ProductApp</Link>
            </div>
          </div>
        </div>
     );
}
 
export default Navbar;