import clsx from "clsx"
import { useContext, type Dispatch,type SetStateAction } from "react";
//context
import MainContext from "../../context/MainContext";


interface IDropDownPros{
    value?:string,
    setOpen?: Dispatch<SetStateAction<boolean>>,
    onChange?: Dispatch<SetStateAction<string>>,
    handelClick : (e:React.ChangeEvent<HTMLInputElement>,opt:string)=>void,
    title: string
}

type StateKey =
  | "request"
  | "submitted"
  | "status"
  | "submitter"
  | "url"
  | "assigned"
  | "priority"
  | "dueDate"
  | "value";

const options: StateKey[] = [
  "request",
  "submitted",
  "status",
  "submitter",
  "url",
  "assigned",
  "priority",
  "dueDate",
  "value"
];
const DropDown:React.FC<IDropDownPros> = ({handelClick,title})=>{
    const {columnVisibility,sorting,states,setState} = useContext(MainContext)!;
    console.log(sorting);
    const CheckedFun = (opt:StateKey)=>{
        switch (title) {
          case "Hide feilds":
              return !columnVisibility[opt]
          case "Sort":
              return states[opt];
          default:
            return !states[opt];
        }
    }
    return(
        <ul className="absolute left-0 top-full z-50 mt-1 w-[140px] bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((opt,id) => (
            <li
              key={id}
              onClick={(e)=>{e.stopPropagation()}}
              className={clsx(
                "px-4 py-2 text-[#757575]",
              )}
            >
                <label htmlFor={`checkbox-${id}`} className="form-control flex flex-row justify-start items-center gap-2 hover:cursor-pointer">
                  <input 
                    onChange={(e)=>{
                      if (title === "Sort") {
                        // console.log("sort");
                        setState((old)=>(
                          {
                            ...old,
                            [opt]:!old[opt]
                          }
                        ))
                      }
                        handelClick(e, opt as string); // fallback for "Hide fields"
                      }
                    }
                    // checked={!columnVisibility[opt]}
                    checked= {CheckedFun(opt)}
                   id={`checkbox-${id}`}  type="checkbox" name="checkbox" />
                  {opt}
                </label>
            </li>
          ))}
        </ul>
    )
}

export default DropDown;