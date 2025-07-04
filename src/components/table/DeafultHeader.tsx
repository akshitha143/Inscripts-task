import type { Header } from "@tanstack/react-table"
import { flexRender } from "@tanstack/react-table"
import type { Job } from "../../types"

interface IDeafultHeaderprops{
 header: Header<Job,unknown>
}


const DeafultHeader:React.FC<IDeafultHeaderprops> = ({header})=>{
    const resizehandeler = header.getResizeHandler();
    return(
        <th 
            style={{
                width: `${header.getSize()}px`
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