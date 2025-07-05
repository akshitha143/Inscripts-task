import { useEditableCell } from "../../hooks/useEditableCell"
import clsx from "clsx";
// import { cn } from "../../utils/cn";
import { useEffect, type ReactNode } from "react";
import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";
import type { Job } from "../../types";
import type { Dispatch, SetStateAction } from "react";

interface CellProps {
  value?: string;
  onChange?: Dispatch<SetStateAction<Job[]>>;
  size ?: number,
  className?:string,
  children?:ReactNode,
  cell: Cell<Job,unknown>,
  activeCell : {row:number,col:number},
  setActiveCell: Dispatch<SetStateAction<{
    row: number;
    col: number;
}>>
}

const TableCell: React.FC<CellProps> = ({cell,onChange,activeCell,setActiveCell}) => {
  const cellEditing = useEditableCell(cell.getValue() as string);
  const editingCell = (e:React.ChangeEvent<HTMLInputElement>)=>{
        cellEditing.onChange(e)
        onChange?.((prevJobs:Job[]) => {
          const updated = [...prevJobs];
          updated[cell.row.index] = {
            ...updated[cell.row.index],
            [cell.column.id as keyof Job]: e.target.value,
          };
          return updated;
        });
  }
  useEffect(() => {
  const isActive =
    activeCell.row === cell.row.index &&
    activeCell.col === cell.column.getIndex();

  if (isActive && !cellEditing.isEditing) {
    cellEditing.startEditing();
  } else if (!isActive && cellEditing.isEditing) {
    cellEditing.setEditing(false);
  }
}, [cellEditing,cell.column,activeCell, cell.row.index]);
  
  return (
    <td
      onClick={() => {
        setActiveCell({row:cell.row.index,col:cell.column.getIndex()})
        cellEditing.startEditing();
      }}
      width={cell.column.getSize()}
      style={{
        width: `${cell.column.getSize()}px`
      }}
      className={clsx(
        "h-12 border-[1.5px] border-[#F6F6F6] bg-white cursor-pointer"
      )}
    >
      {cellEditing.isEditing ? (
        <input
          value={cellEditing.value}
          onChange={editingCell}
          onBlur={cellEditing.onBlur}
          autoFocus
          className="w-full h-12 outline-none px-4 py-2 bg-white border-2 border-[#6C8B70]"
        />
      ) : (
        
        <div className="w-full h-12 flex flex-row justify-center items-center bg-white">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
          
        
      )}
    </td>
  );
};

export default TableCell;
