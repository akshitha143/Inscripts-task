// ColumnVisibilityContext.tsx
import { createContext, useState } from "react";
//types
import type { OnChangeFn, VisibilityState, SortingState } from "@tanstack/react-table";

type MainContextType = {
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  handleColumnVisibilityChange: OnChangeFn<VisibilityState>;
  sorting: SortingState;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
  handleSortingChange: OnChangeFn<SortingState>;
  states: {
    request: boolean;
    submitted: boolean;
    status: boolean;
    submitter: boolean;
    url: boolean;
    assigned:boolean;
    priority:boolean;
    dueDate:boolean;
    value:boolean;
  };
  setState:React.Dispatch<React.SetStateAction<{
    request: boolean;
    submitted: boolean;
    status: boolean;
    submitter: boolean;
    url: boolean;
    assigned:boolean;
    priority:boolean;
    dueDate:boolean;
    value:boolean;
  }>>;
};

const MainContext = createContext<MainContextType | undefined>(
  undefined
);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    "request":true,"submitted":true,"status":true,"submitter":true,"url":true,"assigned":true,"priority":true,"dueDate":true,"value":true
  });
 const [states,setState] = useState(
      {
        request:false,
        submitted:false,
        status:false,
        submitter:false,
        url:false,
        assigned:false,
        priority:false,
        dueDate:false,
        value:false
      }
    );
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
      value={{ columnVisibility, setColumnVisibility, handleColumnVisibilityChange, sorting, setSorting, handleSortingChange,setState,states }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
