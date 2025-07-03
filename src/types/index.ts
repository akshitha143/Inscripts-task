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