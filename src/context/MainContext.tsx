// ColumnVisibilityContext.tsx
import { createContext, useState } from "react";
import type { OnChangeFn, VisibilityState } from "@tanstack/react-table";

type MainContextType = {
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  handleColumnVisibilityChange: OnChangeFn<VisibilityState>;
};

const MainContext = createContext<MainContextType | undefined>(
  undefined
);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    "request":true,"submitted":true,"status":true,"submitter":true,"url":true,"assigned":true,"priority":true,"dueDate":true,"value":true
  });

  const handleColumnVisibilityChange: OnChangeFn<VisibilityState> = (updaterOrValue) => {
    setColumnVisibility((old) =>
      typeof updaterOrValue === "function" ? updaterOrValue(old) : updaterOrValue
    );
  };

  return (
    <MainContext.Provider
      value={{ columnVisibility, setColumnVisibility, handleColumnVisibilityChange }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
