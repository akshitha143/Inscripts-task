import clsx from "clsx"
import { useContext, type Dispatch,type SetStateAction } from "react";
import MainContext from "../../context/MainContext";


interface IDropDownPros{
    value?:string,
    setOpen: Dispatch<SetStateAction<boolean>>,
    onChange: Dispatch<SetStateAction<string>>
}


const DropDown:React.FC<IDropDownPros> = ({onChange,setOpen})=>{
    const {handleColumnVisibilityChange} = useContext(MainContext)!;
    const options = ["request","submitted","status","submitter","url","assigned","priority","dueDate","value"]
    return(
        <ul className="absolute left-0 top-full z-50 mt-1 w-[120px] bg-white rounded-md shadow-md max-h-60 overflow-auto">
          {options.map((opt,id) => (
            <li
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onChange(opt);
                handleColumnVisibilityChange((old)=>(
                    {
                        ...old,
                        [opt]: !old[opt]
                    }
                ))
              }}
              className={clsx(
                "px-4 py-2 text-[#757575] border-l-3 border-transparent hover:font-medium hover:border-[#3E5741] hover:bg-[#E8F0E9] hover:text-[#3E5741] cursor-pointer",
              )}
            >
              {opt}
            </li>
          ))}
        </ul>
    )
}

export default DropDown;