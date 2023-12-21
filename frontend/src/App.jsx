import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button type="button" onClick={() => navigate("/add")}>
        add item
      </button>
    </div>
  );
}

export default App;

export const itemsLoader = async () => {
  const apiURL = import.meta.env.VITE_BACKEND_URL;
  const response = await fetch(`${apiURL}/api/items`);

  return response.json();
};
