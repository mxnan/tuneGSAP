import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section>
      <h2>Sidebar</h2>
      <ul>
        <li>
          <Link to="/components/Link1">Link 1</Link>
        </li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </section>
  );
};

export default Sidebar;
