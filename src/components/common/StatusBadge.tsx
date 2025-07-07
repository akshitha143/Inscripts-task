import React from "react";

//utilities functions
import { cn } from "../../utils/cn";

//type
import type { Status} from "../../types";
import { STATUS_COLOR_CLASSES,STATUS_LABELS } from "../../types";



interface IStatucProps {
    status: Status
}

const StatusBadge:React.FC<IStatucProps> = ({status})=>{
    return (
        <>
            <div className={cn(
                "w-auto h-auto px-3 py-1 rounded-3xl border-none text-sm font-medium",
                STATUS_COLOR_CLASSES[status]
            )}>
                <span>
                    {STATUS_LABELS[status]}
                </span>
            </div>
        </>
    )
}

export default StatusBadge;