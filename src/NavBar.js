import { Link } from "react-router-dom";


const NavBar = () => {
    return ( 
        
        <nav className="flex justify-between p-10 border-b-2">
            <h1 className="text-red-500 text-xl">Dojo blog</h1>
            <div className="links">
                <Link to="/" className="hover:text-blue-500 p-2">Home</Link>
                <Link to="/create" className="hover:text-blue-500 p-2">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;