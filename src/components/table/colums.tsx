import StatusBadge from "../common/StatusBadge";
import type { Job } from "../../types";
import { Link, Reload,Group, Bag, Down,Add, Date, Icon, User, Internet, Heand } from "../icons";
import type { ColumnDef } from "@tanstack/react-table";
import { cn } from "../../utils/cn";



const columns: ColumnDef<Job>[] = [
  {
    header: ()=>(
        <div className="w-full h-full p-2 bg-[#FFFFFF]">

        </div>
    ),
    accessorKey : "ID",
    columns: [
        {
            accessorKey: "id",
            size:32,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center p-2 bg-[#EEEEEE]">
                 <span className="text-[#AFAFAF]">#</span>
              </div>
            ),
            cell: (id) => (
                <span>{id.getValue() as  Job["id"]}</span>
            ),
            
        },
    ],
  },
  {
    id: "financial_overview",
    header: ()=>(
        <div className="w-full h-full flex flex-row justify-start items-center gap-2 p-2 bg-[#E2E2E2]">
            <div className="w-auto h-auto flex flex-row justify-start items-center rounded px-2 py-1 gap-1.5 bg-[#EEEEEE]">
                <Link className="w-4 h-4"/>
                <p className="text-sm text-[#545454] font-light">Q3 Financial Overview</p>
            </div>
            <Reload className="w-5 h-5"/>
        </div>
    ),
    columns:[      
        {
            accessorKey: "request",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2">
                  <Bag className="w-4 h-4"/>
                  <p className="grow h-auto text-start text-sm font-semibold text-[#757575]">Job Request</p>
                  <Down className="w-3 h-3"/>
              </div>
            ),
            cell: (info)=>(
            
                <p className="w-full px-4 py-2 text-start truncate overflow-hidden whitespace-nowrap">
                    {info.getValue() as Job["request"]}
                </p>
    
            )
        },
        {
            accessorKey: "submitted",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2">
                  <Date className="w-4 h-4"/>
                  <p className="grow h-auto text-start text-sm font-semibold text-[#757575]">Submitted</p>
                  <Down className="w-3 h-3"/>
              </div>
            ),
            cell: (info)=>(
                
                <p className="w-full px-4 py-2 text-end truncate overflow-hidden whitespace-nowrap">
                    {info.getValue() as Job["submitted"]}
                </p>
            
            )
        },
        {
            accessorKey: "status",
            size:220,
            header: ()=>(
              <div className="w-full max-w-[220px]  h-full flex justify-center items-center pl-3 pr-2 gap-2">
                  <Icon className="w-4 h-4"/>
                  <p className="grow h-auto text-start text-sm font-semibold text-[#757575]">Status</p>
                  <Down className="w-3 h-3"/>
              </div>
            ),
            cell: info => <StatusBadge status={info.getValue() as Job["status"]} />,
        },
        {
            accessorKey: "submitter",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2">
                  <User className="w-4 h-4"/>
                  <p className="grow h-auto text-start text-sm font-semibold text-[#757575]">Submitter</p>
                  <Down className="w-3 h-3"/>
              </div>
            ),
            cell: (info)=>(
            
                <p className="w-full px-4 py-2 text-start truncate overflow-hidden whitespace-nowrap">
                    {info.getValue() as Job["submitter"]}
                </p>
    
            )
        },
    ]   
  },
  {
    header: ()=>(
        <div className="w-full h-full p-2 bg-[#FFFFFF]">

        </div>
    ),
    accessorKey : "URL",
    columns: [
        {
            accessorKey: "url",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 ">
                  <Internet className="w-4 h-4"/>
                  <p className="grow h-auto text-start text-sm font-semibold text-[#757575]">URL</p>
                  <Down className="w-3 h-3"/>
              </div>
            ),
            cell: (info) => (
                <div className="w-full h-12 px-4 py-2 bg-white flex justify-start items-center">
                    <a
                        href={`https://${info.getValue() as Job["url"]}`}
                        className="text-blue-600 underline  justify-self-start"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {info.getValue() as  Job["url"]}
                    </a>
                </div>
            ),
        },
    ],
  },
  {
    header: ()=>(
        <div className="w-full h-full flex flex-row justify-center items-center  p-2 bg-[#D2E0D4]">
            <div className="w-auto h-auto flex flex-row justify-center items-center gap-3">
                <Group className="w-5 h-5 fill-[#A3ACA3]"/>
                <p className="text-base text-[#505450] font-medium">ABC</p>
                <div className="flex flex-row justify-center items-center gap-1">
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                </div>
            </div>
        </div>
    ),
    accessorKey: "ABC",
    columns:[
        {
            accessorKey: "assigned",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 bg-[#E8F0E9]">
                  <Heand className="w-5 h-5"/>
                  <p className="grow h-auto text-start text-sm font-semibold text-[#666C66]">Assigned</p>
              </div>
            ),
            cell: (info)=>(
            
                <p className="w-full px-4 py-2 text-start truncate overflow-hidden whitespace-nowrap">
                    {info.getValue() as Job["assigned"]}
                </p>
    
            )
        },
    ]
  },
  {
    header: ()=>(
        <div className="w-full h-full flex flex-row justify-center items-center  p-2 bg-[#DCCFFC]">
            <div className="w-auto h-auto flex flex-row justify-center items-center gap-3">
                <Group className="w-5 h-5 fill-[#ffffff]"/>
                <p className="text-base text-[#463E59] font-medium">Answer a question</p>
                <div className="flex flex-row justify-center items-center gap-1">
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                </div>
            </div>
        </div>
    ),
    accessorKey:"Answer_Question",
    
    columns:[
        {
            accessorKey: "priority",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 bg-[#EAE3FC]">
                  <p className="grow h-auto text-start text-sm font-semibold text-[#655C80]">Priority</p>
              </div>
            ),
            cell: (info)=>(
                <p
                    className={cn(
                        "w-full px-4 py-2 font-semibold text-center truncate overflow-hidden whitespace-nowrap",
                        {
                        "text-blue-500": info.getValue() as Job["priority"] === "Low",
                        "text-yellow-500": info.getValue() as Job["priority"] === "Medium",
                        "text-red-500": info.getValue() as Job["priority"] === "High",
                        }
                    )}
                >
                    {info.getValue() as Job["priority"]}
                </p>
            )
        },
        {
            accessorKey: "dueDate",
            size:220,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 bg-[#EAE3FC]">
                  <p className="grow h-auto text-start text-sm font-semibold text-[#655C80]">Due Date</p>
              </div>
            ),
            cell: (info)=>(
            
                <p className="w-full px-4 py-2 text-right truncate overflow-hidden whitespace-nowrap">
                    {info.getValue() as Job["dueDate"]}
                </p>
    
            )
        },
    ]
  },
  {
    header: ()=>(
        <div className="w-full h-full flex flex-row justify-center items-center  p-2 bg-[#FAC2AF]">
            <div className="w-auto h-auto flex flex-row justify-center items-center gap-3">
                <Group className="w-5 h-5 fill-[#ffffff]"/>
                <p className="text-base text-[#695149] font-medium">Extract</p>
                <div className="flex flex-row justify-center items-center gap-1">
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                    <div className="w-[5px] h-[5px] bg-[#AFAFAF] rounded-full"></div>
                </div>
            </div>
        </div>
    ),
    accessorKey:"extract",
    columns:[
        {
            accessorKey: "value",
            size: 180,
            header: ()=>(
              <div className="w-full h-full flex justify-center items-center pl-3 pr-2 gap-2 bg-[#FFE9E0]">
                  <p className="grow h-auto text-start text-sm font-semibold text-[#8C6C62]">Est. Value</p>
              </div>
            ),
            cell: (info)=>(
                <p className="w-full px-4 py-2 text-right truncate overflow-hidden whitespace-nowrap">
                    {(info.getValue() as Job["value"]).replace(/ ₹$/, "")}
                    {info.getValue() as Job["value"] != "" && <span className="font-medium text-[#AFAFAF] ml-1">₹</span>}
                </p>
    
            )
        },
    ]
  },
  {
    header: ()=>(
        <div className="w-full h-full flex flex-row justify-center items-center border-t-2 border-x-2 border-dashed border-[#CBCBCB] p-2 bg-[#EEEEEE]">
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
  },
];

export default columns;