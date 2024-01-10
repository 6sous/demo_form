import { Navigate, useLoaderData } from "react-router-dom";
import "./App.scss";

function App() {
  const items = useLoaderData();

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="App">
      {items.map((item) => {
        return (
          <div key={item.id} className="item">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

export const itemsLoader = async () => {
  const apiURL = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");

  const response = await fetch(`${apiURL}/api/items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(JSON.stringify({ message: "Could not fetch items." }), {
      status: 500,
    });
  }

  return response.json();
};
