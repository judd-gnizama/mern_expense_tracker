import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/test");
    if (!res.ok) return;
    const data = await res.json();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Hello {message}</div>;
}

export default App;
