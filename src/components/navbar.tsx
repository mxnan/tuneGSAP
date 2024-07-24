import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex gap-4">
        <Button variant="ghost">
          <Link to="/"> tuneGSAP</Link>
        </Button>
        <Button variant="ghost">
          <Link to="/components"> component</Link>
        </Button>
        <Button variant="ghost">
          <Link to="/contact"> contact</Link>
        </Button>
      </div>
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <span>Search</span>
      </div>
    </nav>
  );
};

export default Navbar;
