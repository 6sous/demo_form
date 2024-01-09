import { Link, Outlet } from "react-router-dom";
import "../styles/RootLayout.scss";

function RootLayout() {
  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/add">Add Item</Link>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default RootLayout;
