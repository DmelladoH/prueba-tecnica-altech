import Clock from "./clock";
import { Counter } from "./counter";

export default function Header() {
  return (
    <header>
      <h1>My React App</h1>
      <div className="header-content">
        <Counter />
        <Clock />
      </div>
    </header>
  );
}
