import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/test");
    if (!res.ok) return;
    const data = await res.json();
    console.log("data", data);
    setMessage(data.message);
    return data.message;
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
