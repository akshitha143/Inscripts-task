import { useContext } from "react";
import MainContext from "../context/MainContext";
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useColumnVisibility must be used within ColumnVisibilityProvider");
  }
  return context;
};