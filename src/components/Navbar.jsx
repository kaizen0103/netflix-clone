import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6">
        <h1 className="text-red-600 text-4xl font-bold">
            NETFLIX
        </h1>
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
