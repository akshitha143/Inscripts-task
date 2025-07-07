import { useContext, useState, type ReactNode } from "react";

//context for centrilized data storing
import MainContext from "../../context/MainContext";

//components
import DropDown from "../ui/DropDown";


interface IToolButton{
    children: ReactNode,
    title: string,
    addDropDown:boolean,
}

const ToolButton:React.FC<IToolButton> = ({children,title,addDropDown})=>{
    const [open,setOpen] = useState(false);
    const [,setValue] = useState("");
    const {handleColumnVisibilityChange,handleSortingChange} = useContext(MainContext)!;

    const handelInteraction = (input:string)=>{
        console.log("you Click "+ input+ " Button");
    }

    const handelClick = (e:React.ChangeEvent<HTMLInputElement>,opt:string)=>{
            e.stopPropagation();
            setOpen(false);
            setValue(opt);
            switch (title) {
                case "Hide feilds":
                    handleColumnVisibilityChange((old)=>(
                        {
                            ...old,
                            [opt]: !old[opt]
                        }
                        ));
                    break;
                case "Sort":
                    console.log("sortinglogic");
                    handleSortingChange((old) => {
                        const exists = old.find((sort) => sort.id === opt && sort.desc === true);
                        if (exists) {
                            // Remove the existing one
                            return old.filter((sort) => !(sort.id === opt && sort.desc === true));
                        } else {
                            // Add new sorting rule
                            return [
                                ...old,
                                {
                                    id: opt,
                                    desc: true,
                                },
                            ];
                        }
                    });
                    break;
            
                default:
                    break;
            }
            
        }
    return(
        <div onClick={()=>{handelInteraction(title);setOpen(!open);}} className="relative w-auto h-auto flex flex-row items-center gap-2 py-2 px-3">
            {children}
            <span className="hidden md:block text-sm font-light text-[#121212]">{title}</span>
            {addDropDown && open && <DropDown title={title} handelClick={handelClick}/>}
        </div>
    )
}

export default ToolButton;