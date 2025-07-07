import { useEffect, useMemo, useState } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
//data
import mockData from "../../data/tableData";
//compoentes
import TableCell from "./TableCell";
import columns from "./colums";
import DeafultHeader from "./DeafultHeader";
//hooks
import { useMainContext } from "../../hooks/useMainContext";


const SpreadsheetTable = () => {
    const [data ,setData] = useState(mockData);
    const [columnDef,setNewColumn] = useState(columns);
    const [selectedCell,setSelectedCell] = useState({row:-1,col:-1});
    const {columnVisibility,handleColumnVisibilityChange,sorting,handleSortingChange} = useMainContext();
    const table = useReactTable({
        data: data,
        columns:columnDef,
        columnResizeMode: 'onChange',
        columnResizeDirection: "ltr",
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableColumnResizing: true,
        state:{
            columnVisibility,
            sorting
        },
        
        onColumnVisibilityChange: handleColumnVisibilityChange,
        onSortingChange: handleSortingChange,
        defaultColumn: {
            size: 220,
            minSize: 32,
            maxSize: 500,
            enableSorting:true,
        },
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        setSelectedCell(prev => {
        let { row, col } = prev;
        // if (e.key === "ArrowRight") col = Math.min(col + 1, Object.keys(data[0]).reduce((acc) => acc + 1, 0) - 1);
        if (e.key === "ArrowRight") col = Math.min(col + 1, table.getAllLeafColumns().length - 2);
        else if (e.key === "ArrowLeft") col = Math.max(col - 1, 1);
        else if (e.key === "ArrowDown") row = Math.min(row + 1, data.length - 1);
        else if (e.key === "ArrowUp") row = Math.max(row - 1, 0);
        return { row, col };
        });
    };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [data,table]);

    const totalSize = useMemo(()=>{
        return table.getTotalSize();
    },[table])

  return (
    <div className="max-w-full flex flex-col overflow-y-hidden overflow-x-auto">
        <div style={{width: Math.max(totalSize,100)+"px"}}>
            {/* Table Header (non-scrollable) */}
            <table className="table-fixed w-fit text-sm bg-[#F6F6F6] border-collapse">
                <thead className="sticky top-0 bg-[#F6F6F6] z-50">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <DeafultHeader length={columnDef.length} setNewColumn={setNewColumn}  key={header.id} header={header} />
                    ))}
                    </tr>
                ))}
                </thead>
            </table>

            {/* Scrollable Table Body */}
            <div  className="w-fit max-h-[calc(100vh-230px)] overflow-x-hidden overflow-y-auto ">
                <table className="table-fixed w-fit text-sm bg-white border-collapse">
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell setActiveCell={setSelectedCell} activeCell={selectedCell} onChange={setData} key={cell.id} cell={cell} />
                            ))}
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default SpreadsheetTable;
