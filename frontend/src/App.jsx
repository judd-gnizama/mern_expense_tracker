import { useEffect, useState } from "react";

const BACKEND_PATH = "https://mern-expense-tracker-tau.vercel.app";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(`${BACKEND_PATH}/api/test`);
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
