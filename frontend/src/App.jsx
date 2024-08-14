import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/test");
    const data = await res.json();
    return data.message;
  };

  useEffect(() => {
    setMessage(fetchData());
  }, []);

  return <div>Hello {message}</div>;
}

export default App;
