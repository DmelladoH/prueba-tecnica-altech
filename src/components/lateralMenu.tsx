import { Link } from "react-router-dom";

export default function LateralMenu() {
  return (
    <aside>
      <p>Menu</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">profiles</Link>
        </li>
      </ul>
    </aside>
  );
}
