
import React from "react"
import { useState } from "react"
import userImg from "../../assets/images/user.png"

import {user} from "../../data/mockData"

//components
import Breadcrumbs from "../ui/BreadCrums"

//icons
import { Bell } from "../icons"

//types
import type { IBasicFCProps } from "../../types"
import SearchInput from "../ui/SearchInput"


const AppHeader: React.FC<IBasicFCProps> = ()=>{
    const [search, setSearch] = useState('');

    return(
        <>
            <header className="w-full h-auto bg-white flex flex-row justify-start md:justify-between items-center px-2 md:px-4 py-2 border-b border-[#EEEEEE]">
                <div id="left-section" className="w-auto max-w-3xl h-auto hidden md:flex flex-row justify-center items-center gap-4">
                    <svg className="hidden lg:block" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.75 0C18.5449 0 20 1.45507 20 3.25V12.75C20 14.5449 18.5449 16 16.75 16H3.25C1.45507 16 0 14.5449 0 12.75V3.25C0 1.45507 1.45507 0 3.25 0H16.75ZM3.25 1.5C2.2835 1.5 1.5 2.2835 1.5 3.25V12.75C1.5 13.7165 2.2835 14.5 3.25 14.5H12.5V1.5H3.25Z" fill="#618666"/>
                    </svg>

                    <div className="hidden lg:flex flex-row justify-center items-center gap-3">
                        <Breadcrumbs
                            items={[
                                { label: "Workspace", href: "/" },
                                { label: "Folder 2", href: "/" },
                                { label: "Spreadsheet 3", href: "/" },
                            ]}
                        />
                        <div className="flex flex-row justify-center items-center gap-1 p-2">
                            <div className="w-1 h-1 rounded-full bg-[#AFAFAF]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#AFAFAF]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#AFAFAF]"></div>
                        </div>
                    </div>
                </div>
                <div id="Right-section" className="w-auto h-auto flex flex-row justify-end items-center gap-2">
                    <SearchInput
                        value={search}
                        onChange={(e) => {
                        setSearch(e.target.value);
                        console.log('Searching:', e.target.value);
                        }}
                        placeholder="Search within sheet"
                    />
                    <div id="notification" className="w-auto h-auto relative flex flex-col justify-center items-center">
                        <Bell className="w-5 h-5 md:w-6 md:h-6"/>
                        <div className="absolute  -top-2 -right-2 p-[2px] bg-white">
                            <div className=" bg-[#4B6A4F] w-4 h-4 text-[10px] flex flex-row justify-center items-center text-[#F6F6F6]  rounded-full">2</div>
                        </div>
                    </div>
                    <div className="w-[64px] md:w-[200px] h-auto flex flex-row justify-center items-center gap-3">
                        <img alt="user-image" src={userImg} className="w-[32px] h-[32px] rounded-full "/>
                        <div className="hidden grow h-auto md:flex flex-col justify-center items-start">
                            <p className="text-left text-xs font-medium text-[#121212]">{user[0].name}</p>
                            <p className="w-[84px] text-xs truncate text-[#757575]">{user[0].email}</p>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default AppHeader;