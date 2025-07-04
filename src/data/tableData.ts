// import type { Job } from "../types";
// const mockData: Job[] = [
//   {
//     id: 1,
//     request: "Launch social media campaign for product",
//     submitted: "15-11-2024",
//     status: "process",
//     submitter: "Aisha Patel",
//     url: "www.aishapatel.com",
//     assigned: "Sophie Choudhury",
//     priority: "Medium",
//     dueDate: "20-11-2024",
//     value: "6,200,000 ₹",
//   },
//   {
//     id: 2,
//     request: "Update press kit for company redesign",
//     submitted: "28-10-2024",
//     status: "start",
//     submitter: "Irfan Khan",
//     url: "www.irfankhan.pro",
//     assigned: "Tejas Pandey",
//     priority: "High",
//     dueDate: "30-10-2024",
//     value: "3,500,000 ₹",
//   },
//   {
//     id: 3,
//     request: "Finalize user testing feedback for app",
//     submitted: "05-12-2024",
//     status: "process",
//     submitter: "Mark Johnson",
//     url: "www.markjohnson.dev",
//     assigned: "Rachel Lee",
//     priority: "Medium",
//     dueDate: "10-12-2024",
//     value: "4,750,000 ₹",
//   },
//   {
//     id: 4,
//     request: "Design new features for the website",
//     submitted: "10-01-2025",
//     status: "completed",
//     submitter: "Emily Green",
//     url: "www.emilygreen.me",
//     assigned: "Tom Wright",
//     priority: "Low",
//     dueDate: "15-01-2025",
//     value: "5,900,000 ₹",
//   },
//   {
//     id: 5,
//     request: "Prepare financial report for Q4",
//     submitted: "25-01-2025",
//     status: "blocked",
//     submitter: "Jessica Brown",
//     url: "www.jessicabrown.biz",
//     assigned: "Kevin Smith",
//     priority: "Low",
//     dueDate: "30-01-2025",
//     value: "2,800,000 ₹",
//   },
// ];

// export default mockData;

import type { Job } from "../types";

const filledData: Job[] = [
  {
    id: 1,
    request: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    id: 2,
    request: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.pro",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    id: 3,
    request: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.dev",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    id: 4,
    request: "Design new features for the website",
    submitted: "10-01-2025",
    status: "completed",
    submitter: "Emily Green",
    url: "www.emilygreen.me",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    id: 5,
    request: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.biz",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

// ➕ 95 blank rows
const blankRows: Job[] = Array.from({ length: 95 }, (_, index) => ({
  id: index + 6,
  request: "",
  submitted: "",
  status: "" as Job["status"], // force empty but typed
  submitter: "",
  url: "",
  assigned: "",
  priority: "" as Job["priority"],
  dueDate: "",
  value: "",
}));

const mockData: Job[] = [...filledData, ...blankRows];

export default mockData;
