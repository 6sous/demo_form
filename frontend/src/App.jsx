import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const items = useLoaderData();

  return (
    <div className="App">
      {items.map((item) => {
        return (
          <div key={item.id}>
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
  const response = await fetch(`${apiURL}/api/items`);

  return response.json();
};
