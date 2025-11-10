import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">MyPortfolio</div>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
