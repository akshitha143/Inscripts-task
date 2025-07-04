// ColumnVisibilityContext.tsx
import { createContext, useState } from "react";
import type { OnChangeFn, VisibilityState, SortingState } from "@tanstack/react-table";

type MainContextType = {
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  handleColumnVisibilityChange: OnChangeFn<VisibilityState>;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  handleSortingChange: OnChangeFn<SortingState>;
};

const MainContext = createContext<MainContextType | undefined>(
  undefined
);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    "request":true,"submitted":true,"status":true,"submitter":true,"url":true,"assigned":true,"priority":true,"dueDate":true,"value":true
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  const handleColumnVisibilityChange: OnChangeFn<VisibilityState> = (updaterOrValue) => {
    setColumnVisibility((old) =>
      typeof updaterOrValue === "function" ? updaterOrValue(old) : updaterOrValue
    );
  };

  const handleSortingChange: OnChangeFn<SortingState> = (updaterOrValue) =>
    setSorting((prev) =>
      typeof updaterOrValue === "function" ? updaterOrValue(prev) : updaterOrValue
  );

  return (
    <MainContext.Provider
      value={{ columnVisibility, setColumnVisibility, handleColumnVisibilityChange, sorting, setSorting, handleSortingChange }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
