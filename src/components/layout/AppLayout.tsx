// AppLayout for the page
import React from "react"
//icons

//componetes
import AppHeader from "../header/AppHeader"
import ToolBar from "../header/ToolBar"
import TitleTab from "../header/TitelTab"

//types
import type { IBasicFCProps } from "../../types"



const AppLayout: React.FC<IBasicFCProps> = ({children})=>{

    return(
        <>
            <div className="w-full h-screen  flex flex-col justify-start items-start overflow-hidden">
                <div className="sticky top-0 right-0 left-0 w-full h-auto z-50">
                    <AppHeader/>
                    <ToolBar/>
                </div>
                <main className="w-full z-40">
                    {children}
                </main>
                <TitleTab/>
            </div>
        </>
    )
}

export default AppLayout;