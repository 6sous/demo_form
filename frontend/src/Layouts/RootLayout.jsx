import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <Link to="/add">Add Item</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default RootLayout;
