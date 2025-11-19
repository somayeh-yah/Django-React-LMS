import { createContext, useContext } from "react";
import Swal from "sweetalert2";
import { alertsConfig } from "../constants/alertConfig";

// Create context
export const AlertContext = createContext();

export const GlobalAlertProvider = ({ children }) => {
  // Defining Sweetalert2 popup
  const showAlert = (type, options = {}) => {
    const config = alertsConfig[type] || {};
    Swal.fire({
      ...config,
      ...options,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
