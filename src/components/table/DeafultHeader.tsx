import type { ColumnDef, Header } from "@tanstack/react-table"
import { flexRender } from "@tanstack/react-table"
import type { Job } from "../../types"
import { Add } from "../icons";

interface IDeafultHeaderprops{
 header: Header<Job,unknown>;
 setNewColumn? : React.Dispatch<React.SetStateAction<ColumnDef<Job>[]>>
 length: number;


}


const DeafultHeader:React.FC<IDeafultHeaderprops> = ({header,setNewColumn,length})=>{
    const resizehandeler = header.getResizeHandler();
    return(
        <th 
            style={{
                width: `${header.getSize()}px`
            }}
            onClick={(e)=>{
                e.stopPropagation();
                console.log(header.index,length);
                if(setNewColumn && header.depth==1 && header.index==length-1){
                    
                    setNewColumn((old)=>{
        
                        const newColumns = [
                            ...old.slice(0,old.length-1),
                            {
                                header: ()=>(
                                    <div className="w-full h-full flex flex-row justify-center items-center border-t-2 border-x-2 border-dashed border-[#CBCBCB] p-2 bg-[#EEEEEE]">
                                        {`untitled-${old.length+1}`}
                                    </div>
                                ),
                                accessorKey : `untitled-${old.length+1}`,
                                columns: [
                                    {
                                        accessorKey: `untitled-${header.depth}-${old.length+1}`,
                                        size:220,
                                        header: ()=>(
                                        <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 bg-white border-x-2 border-dashed border-[#CBCBCB]">
                                        </div>
                                        ),
                                        cell: ()=>(
                                            <div className="w-full h-full border-x-2 border-dashed border-[#CBCBCB]">
                                            </div>
                                
                                        )
                                    },
                                ],
                            },
                            // old[old.length-1]
                            {
                                header: ()=>(
                                    <div className="w-full h-full flex flex-row justify-center items-center border-t-2 border-x-2 border-dashed border-[#CBCBCB] p-2 bg-[#EEEEEE] hover:cursor-pointer">
                                        <Add className="w-4 h-4 fill-[#04071E] stroke-2"/>
                                    </div>
                                ),
                                accessorKey : "ADD",
                                columns: [
                                    {
                                        accessorKey: "add",
                                        size:220,
                                        header: ()=>(
                                        <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 bg-white border-x-2 border-dashed border-[#CBCBCB]">
                                        </div>
                                        ),
                                        cell: ()=>(
                                            <div className="w-full h-full border-x-2 border-dashed border-[#CBCBCB]">
                                            </div>
                                
                                        )
                                    },
                                ],
                            }
                        ]
                        console.log(newColumns);
                        return newColumns;
                    });
                }
            }}
            key={header.id} colSpan={header.colSpan}  className={`relative h-11 align-middle border-[1.5px] border-[#F6F6F6]`} >
            {flexRender(header.column.columnDef.header, header.getContext())}
            {
                  <div 
                    onDoubleClick={()=>header.column.resetSize()}
                    onMouseDown={resizehandeler}
                    onTouchStart={resizehandeler}
                    className={`absolute right-0 top-0 h-full w-[5px] hover:bg-black transition-colors duration-200 select-none ${header.column.getIsResizing()?"bg-amber-400": ""}`}
                    style={{cursor:'col-resize',touchAction:'none'}}
                  >

                  </div>
            }
        </th>
    )
}

export default DeafultHeader;