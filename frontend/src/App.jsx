import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/globalContext";

function App() {
  const [message, setMessage] = useState("");
  const { backendURL } = useGlobalContext();

  const fetchData = async () => {
    try {
      const res = await fetch(`${backendURL}/api/test`);
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hellow</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
