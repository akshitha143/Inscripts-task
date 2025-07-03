// AppLayout for the page
import React from "react"
//icons

//componetes
import AppHeader from "../header/AppHeader"

//types
import type { IBasicFCProps } from "../../types"
import ToolBar from "../common/ToolBar"
import TitleTab from "../common/TitelTab"


const AppLayout: React.FC<IBasicFCProps> = ({children})=>{

    return(
        <>
            <div className="w-full h-screen  flex flex-col justify-start items-start">
                <AppHeader/>
                <ToolBar/>
                <main>

                    {children}
                </main>
                <TitleTab/>
            </div>
        </>
    )
}

export default AppLayout;