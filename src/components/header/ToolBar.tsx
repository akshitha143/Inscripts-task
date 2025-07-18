
import React from "react"

//icons
import { Download,Upload,Share,Group, Hide, Sort, Filter, Cell } from "../icons";


//types
import type { IBasicFCProps } from "../../types"

//components
import Button from "../ui/Button";
import ToolButton from "../common/ToolButton";

const handelInteraction = (input:string)=>{
    console.log("you Click "+ input+ " Button");
}

const ToolBar: React.FC<IBasicFCProps> = ()=>{
    return(
        <>
            <div className="w-full h-auto bg-white flex flex-row flex-wrap md:flex-nowrap justify-start items-center md:px-4 md:py-2 border-b border-[#EEEEEE]">

                <div onClick={()=>{handelInteraction("Tool bar")}} className="hidden  w-auto h-auto md:flex flex-row justify-center items-center gap-2  py-2  hover:cursor-pointer">
                    <span className="text-base font-light text-[#121212]">Tool bar</span>
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.91665 0.31766C4.07259 0.161172 4.32585 0.160721 4.48234 0.316653L8.86993 4.68864C9.0425 4.86059 9.0425 5.14004 8.86993 5.312L4.48234 9.68398C4.32585 9.83992 4.07259 9.83946 3.91665 9.68298C3.76072 9.52649 3.76117 9.27322 3.91766 9.11729L8.04933 5.00032L3.91766 0.883345C3.76117 0.727413 3.76072 0.474148 3.91665 0.31766ZM0.716654 0.31766C0.872585 0.161172 1.12585 0.160721 1.28234 0.316653L5.66993 4.68864C5.8425 4.86059 5.8425 5.14004 5.66993 5.312L1.28234 9.68398C1.12585 9.83992 0.872585 9.83946 0.716654 9.68298C0.560723 9.52649 0.561174 9.27322 0.717662 9.11729L4.84933 5.00032L0.717662 0.883345C0.561174 0.727413 0.560723 0.474148 0.716654 0.31766Z" fill="#121212"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.21175 0.387489C1.09439 0.270541 0.904439 0.270879 0.78749 0.388245C0.670542 0.50561 0.67088 0.69556 0.788246 0.812508L4.91991 4.92948C4.93874 4.94825 4.94933 4.97373 4.94933 5.00032C4.94933 5.0269 4.93874 5.05239 4.91991 5.07115L0.788246 9.18813C0.67088 9.30508 0.670542 9.49502 0.787491 9.61239C0.904439 9.72976 1.09439 9.73009 1.21175 9.61315L5.59934 5.24116C5.73269 5.10829 5.73269 4.89235 5.59934 4.75947L1.21175 0.387489ZM0.645817 0.247075C0.840732 0.0514657 1.15731 0.0509019 1.35292 0.245816L5.74051 4.6178C5.9523 4.82884 5.9523 5.1718 5.74051 5.38283L1.35292 9.75482C1.15731 9.94973 0.840731 9.94917 0.645817 9.75356C0.450904 9.55795 0.451467 9.24137 0.647077 9.04645L4.70765 5.00032L0.647077 0.954181C0.451467 0.759267 0.450903 0.442685 0.645817 0.247075ZM4.41175 0.387489C4.29439 0.270541 4.10444 0.270879 3.98749 0.388245C3.87054 0.50561 3.87088 0.69556 3.98825 0.812508L8.11991 4.92948C8.13874 4.94825 8.14933 4.97373 8.14933 5.00032C8.14933 5.0269 8.13874 5.05239 8.11991 5.07115L3.98825 9.18813C3.87088 9.30508 3.87054 9.49502 3.98749 9.61239C4.10444 9.72976 4.29439 9.73009 4.41175 9.61315L8.79934 5.24116C8.93269 5.10829 8.93269 4.89235 8.79934 4.75947L4.41175 0.387489ZM3.84582 0.247075C4.04073 0.0514657 4.35731 0.0509019 4.55292 0.245816L8.94051 4.6178C9.1523 4.82884 9.1523 5.1718 8.94051 5.38283L4.55292 9.75482C4.35731 9.94973 4.04073 9.94917 3.84582 9.75356C3.6509 9.55795 3.65147 9.24137 3.84708 9.04645L7.90765 5.00032L3.84708 0.954181C3.65147 0.759267 3.6509 0.442685 3.84582 0.247075Z" fill="#121212"/>
                    </svg>
                </div>    
                <div className="hidden md:block w-auto h-full px-2 py-1">
                    <div className="w-[1.5px] rounded-2xl h-7 bg-[#EEEEEE]">
                    </div>
                </div>
                <div className="grow h-full flex flex-row justify-evenly md:justify-start items-center gap-3 hover:cursor-pointer py-1 md:py-0">
                    <ToolButton addDropDown={true} title="Hide feilds">
                        <Hide/>
                    </ToolButton>
                    <ToolButton addDropDown={true} title="Sort">
                        <Sort/>
                    </ToolButton>
                    <ToolButton addDropDown={false} title="Filter">
                        <Filter/>
                    </ToolButton>
                    <ToolButton addDropDown={false} title="Cell view">
                        <Cell/>
                    </ToolButton>
                    
                </div>
                <div className="w-full md:w-auto h-auto flex flex-row justify-evenly md:justify-end items-center gap-2 py-2 md:py-0 border-t border-[#EEEEEE] md:border-none">
                    <Button onClick={()=>{handelInteraction("Import")}} className="gap-1.5 py-2 px-[10px] pr-3">
                        <Download className="h-[18px]"/>
                        <span className="hidden md:block text-[#545454]">Import</span>
                    </Button>
                    <Button onClick={()=>{handelInteraction("Export")}} className="gap-1.5 py-2 px-[10px] pr-3">
                        <Upload className="h-[18px]"/>
                        <span className="hidden md:block text-[#545454]">Export</span>
                    </Button>
                    <Button onClick={()=>{handelInteraction("Share")}} className="gap-1.5 py-2 px-3">
                        <Share className="h-[18px] w-[18px]"/>
                        <span className="hidden md:block text-[#545454]">Share</span>
                    </Button>
                    <Button onClick={()=>{handelInteraction("New Action")}} variant="active" className="gap-1.5 py-2 px-6 pr-[26px]">
                        <Group  className="h-4 w-4 fill-white"/>
                        <span className="hidden md:block text-[#FFFFFF] font-medium">New Action</span>
                    </Button>
                </div>

            </div>
        </>
    )
}

export default ToolBar;