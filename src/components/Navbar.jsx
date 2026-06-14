import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" px-12 py-6 flex gap-4">
        
        <Link
            to="/login"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
            Sign In
        </Link>
    </nav>
    
  );
}

export default Navbar;
