import { createContext, useState, useContext } from "react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlertContext = () => {
  const context = useContext(AlertContext);
  return context;
};

export { AlertProvider, useAlertContext };
