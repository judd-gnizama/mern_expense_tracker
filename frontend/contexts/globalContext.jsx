import { createContext, useContext, useState } from "react";

// const BACKEND_URL = "https://mern-expense-tracker-tau.vercel.app";
const BACKEND_URL = "http://localhost:5000";

// create context
const globalContext = createContext({
  backendURL: "",
});

const GlobalContextProvider = ({ children }) => {
  // state variables
  const [backendURL, setBackendURL] = useState(BACKEND_URL);

  return (
    <globalContext.Provider value={{ backendURL }}>
      {children}
    </globalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(globalContext);
export default GlobalContextProvider;
