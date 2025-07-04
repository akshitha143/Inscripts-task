import React from "react"
import { useState } from "react"
import { cn } from "../../utils/cn"


//types
import type { IBasicFCProps } from "../../types"
import { Add } from "../icons"

const TitleTab: React.FC<IBasicFCProps> = ()=>{
    const TabList  = ["All Orders","Pending","Reviewed","Arrived"]
    const [currentTab,SetTab] = useState<number>(0);

    return(
        <>
            <div className="fixed bottom-0 left-0 right-0 w-full h-auto bg-[#FFFFFF] border-t border-[#EEEEEE] flex flex-row justify-start items-center px-8 pt-1 z-50">
                {
                    TabList.map((item,id)=>(
                        <div onClick={()=>{SetTab(id)}} key={id} className={cn(
                            "px-4 py-[10px] text-base text-[#757575] font-medium hover:text-[#3E5741] hover:cursor-pointer",
                            currentTab==id && "bg-[#E8F0E9] border-t-2 border-[#4B6A4F] text-[#3E5741] font-semibold"
                            )}>
                            {item}
                        </div>
                    ))
                }
                <div className="px-4 py-[10px] text-base text-[#757575] font-medium hover:cursor-pointer">
                   <Add className="w-4 h-4 fill-[#757575] hover:fill-[#3E5741] stroke-2"/>
                </div>
            </div>
        </>
    )
}

export default TitleTab;