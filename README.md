
# 🧩 Flexcel 

## 📌 Project Title

> 🧑‍💻 Internship Project — Submitted to **[Inscripts](https://inscripts.com/)**
**Flexcel** is an Excel-like spreadsheet web application built using React and Tailwind CSS.  
> This project was developed as part of the **React Intern Assignment provided by [Inscripts](https://inscripts.com/)**.


---

## 🎯 Main Goal

The main goal of this project is to **create a static, front-end-only prototype** that **replicates the design and core experience of Excel or Google Sheets**, as per the Figma design shared in the React Intern Assignment. The goal is to match both **visual fidelity** and **user experience (UX)** of real spreadsheet applications.

---

## 📖 Project Description

**Flexcel** is a custom-built spreadsheet web interface designed to mimic the functionality and appearance of Microsoft Excel. It allows users to **edit data directly**, **navigate cells using keyboard arrows**, **sort data by columns**, and even **hide columns**, offering a seamless and intuitive spreadsheet experience.

The design was closely followed using the provided [Figma design](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535) and implemented with a modern React + Tailwind + TypeScript stack.

---

## 🔨 Detailed Approach

1. **Understand the Figma UI design** and break it into reusable UI components (Table, Header, Buttons, Tabs, Inputs).
2. **Build the layout** to exactly match the pixel-perfect Figma frame using Tailwind CSS.
3. Use `@tanstack/react-table` to create a dynamic table with support for:
   - Column sorting
   - Cell rendering
   - Row model generation
4. Create **editable cells** using local state per cell.
5. Implement **keyboard navigation** with arrow keys (stretch goal).
6. Add **column hide/unhide** feature using `visibility` state.
7. Add mock data to simulate a real spreadsheet scenario.
8. Handle component state, click handlers, and conditional styles using `clsx` and utility hooks.

---

## 🧪 Tech Stack

| Technology      | Purpose                                |
|-----------------|----------------------------------------|
| React 18        | UI rendering and component architecture |
| TypeScript      | Static typing and IntelliSense          |
| Tailwind CSS    | Utility-first styling                   |
| react-table     | Table generation and row/column logic   |
| Vite            | Lightning-fast React bundler            |
| clsx            | Conditional class name utility          |
| Vercel          | Deployment platform                     |

---

## 🗂️ Folder Structure

```
flexcel/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/             # Icons, images, etc.
│   ├── components/         # Reusable components 
│   │   ├── Common/         # Folder contains shared, reusable UI elements that are used across multiple parts of the application
│   │   ├── Header/         # Folder contains all the UI components responsible for rendering the top section (or header bar) of the Flexcel app.
│   │   ├── Icons/          # Reusable Icons components using Svgs
│   │   ├── Layout/         # Folder contains reusable layout-related components that define how your app is visually structured on the page.
│   │   ├── Table/          # Folder contains all components and logic required to build the Excel-like spreadsheet grid in the Flexcel app.
|   |   |     ├── column.tsx          # Defines column groups, headers, and cells for the spreadsheet table.
|   |   |     ├── DeafultHeader.tsx   # Defines spreadsheet table columns, headers, and custom cell rendering logic.
|   |   |     ├── NewTable.tsx.       # Renders spreadsheet table with editing, sorting, resizing, and keyboard navigation.
|   |   |     └── TableCell.tsx       # Handles editable spreadsheet cell rendering, focus, and active selection logic.
│   │   └── Ui/             # Ui Components
│   ├── context/            # Column visibility context
│   ├── pages/              # All Pages of this web App
│   ├── routes/             # Creating Page Rotes of app  
│   ├── hooks/              # Custom hooks (editable cell)
│   ├── data/               # Mock spreadsheet data
│   ├── utils/              # common ts function
│   ├── types/              # Type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.js
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

# 📁 `components/Table/` – Table Components

This folder defines the spreadsheet functionality and layout in the Flexcel app. It includes column definitions, interactive cells, editable behavior, and the full table rendering logic using `@tanstack/react-table`.

---

## 📄 `columns.tsx`
- **Purpose**: Central configuration for the spreadsheet's columns.
- **What It Does**: Defines column groups, headers with icons, cell renderers, styles, and sorting logic.
- **Usage**: Passed to `react-table` in `NewTable.tsx` to structure the grid.

---

## 📄 `DefaultHeader.tsx`
- **Purpose**: Custom header component for rendering column headers.
- **What It Does**: Renders header content and a resizable grip for column resizing.
- **Usage**: Used in `NewTable.tsx` inside the `<thead>` to render all headers.

---

## 📄 `NewTable.tsx`
- **Purpose**: The main table component that renders the full spreadsheet.
- **What It Does**: Sets up `react-table` instance, handles keyboard navigation, and connects header, body, and resizing.
- **Usage**: Can be imported and rendered inside the main application view or `pages/`.

---

## 📄 `TableCell.tsx`
- **Purpose**: Handles individual spreadsheet cell rendering and editing.
- **What It Does**: Enables inline cell editing, highlights active cell, syncs updates to state.
- **Usage**: Rendered in every row of `NewTable.tsx` using `table.getRowModel()`.

---

## ✅ Summary

These files together make up the core logic for a fully interactive, Excel-like table experience, including:
- Column grouping and nested headers
- Keyboard navigation with arrow keys
- Inline cell editing
- Resizable columns
- Responsive styling with Tailwind CSS


---

## 🔁 Workflow

1. **Clone the repo**
2. **Install dependencies**
3. **Develop components** one by one with design reference
4. **Implement table logic** with `react-table`
5. **Add sorting, editing, and keyboard nav**
6. **Apply polish** for pixel-perfection and Figma match
7. **Lint, format, and type-check**
8. **Deploy to Vercel**

---

## 🚀 GitHub Setup

```bash
# Step 1: Clone the repo
git clone https://github.com/akshitha143/Inscripts-task.git
cd Inscripts-task

# Step 2: Install dependencies
npm install

# Step 3: Start dev server
npm run dev

# Step 4: Linting and type check
npm run lint
npm run type-check
```

---

## 🌐 Live Demo

👉 [Live on Vercel](https://inscripts-task.vercel.app/)

---

## ✨ Features Explained

### ✅ 1. Pixel-Perfect Spreadsheet Layout

The UI closely mirrors the Figma design. Everything from spacing to typography and grid alignment has been meticulously matched.

### ✅ 2. Editable Cells

Users can click on any data cell to edit its value directly, mimicking the natural editing behavior of Excel.

### ✅ 3. Column Sorting (Descending)

Clicking on column headers allows sorting the column values in descending order.

### ✅ 4. Column Hiding

Users can toggle the visibility of specific columns dynamically, improving data focus.

### ✅ 5. Keyboard Navigation (Arrow Keys)

Users can move between cells using the arrow keys (↑ ↓ ← →) just like in Excel — improving speed and UX.

### ✅ 6. Responsive UI

Tailwind CSS was used to make the layout modular and responsive across screen sizes.

### ✅ 7. Tabs, Buttons, and Toolbars

Interactive UI elements such as top tabs and toolbar buttons have state changes or log to console, ensuring no dead UI components.

### ✅ 8. Clean TypeScript Code

All components are typed, strict mode enabled, and built for maximum maintainability and scalability.

---

## ✅ Conclusion

**Flexcel** is a fully functional and beautiful spreadsheet interface clone, created as part of an intern assignment. It demonstrates strong React fundamentals, design implementation, and interactivity handling. It provides a delightful Excel-like user experience using modern web technologies.

---

## 🙏 Acknowledgement

This project was developed as part of the **Frontend Intern Assignment** at **Inscripts**.

💙 **Thank you to the team at Inscripts for giving me this opportunity** to demonstrate my skills in UI development and React. It was a great learning experience to build a pixel-perfect, Excel-like interface and apply advanced table rendering techniques.

Looking forward to more such exciting challenges!

---

[![Inscripts](https://example.com/inscripts-logo.svg)](https://inscripts.com)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)
![react-table](https://img.shields.io/badge/React--Table-v8-6B7280?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-fast-yellow?logo=vite)
![Internship](https://img.shields.io/badge/Intern_Assignment-Inscripts-blueviolet)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)