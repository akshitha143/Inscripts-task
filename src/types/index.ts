export type User = {
  name: string;
  email: string;
  role: string;
  status: string;
};


export interface IBasicFCProps{
    children?:React.ReactNode,
    className?: string,
}


export type Status = "process" | "start" | "completed" | "blocked";

export const STATUS_LABELS: Record<Status, string> = {
  process: "In-progress",
  start: "Need to start",
  completed: "Completed",
  blocked: "Blocked"
};

export const STATUS_COLOR_CLASSES: Record<Status, string> = {
  process: "bg-[#FFF3D6] text-[#85640B]",
  start: "bg-[#E2E8F0] text-[#475569]",
  completed: "bg-[#D3F2E3] text-[#0A6E3D]",
  blocked: "bg-[#FFE1DE] text-[#C22219]"
};


export interface Job {
  id: number;
  request: string;
  submitted: string;
  status: Status;
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  value: string;
}