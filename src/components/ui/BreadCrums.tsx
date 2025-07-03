import React from "react";
import { Link } from "react-router-dom";
import { RightArrow } from "../../assets/icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  const total = items.length;

  const renderBreadcrumbItem = (
    item: BreadcrumbItem,
    isLast: boolean,
    index: number
  ) => {
    return (
      <div key={index} className="flex flex-row justify-center items-center gap-2">
        {index > 0 && <RightArrow className="w-3 h-3 text-gray-400" />}
        {item.href && !isLast ? (
          <Link to={item.href} className="text-md font-medium text-[#AFAFAF] hover:text-[#121212]">
            {item.label}
          </Link>
        ) : (
          <span className="text-md font-medium text-[#121212]">{item.label}</span>
        )}
      </div>
    );
  };

  const collapsed = total > 3;

  return (
    <nav
      className={`flex items-center gap-3 text-sm text-gray-600 ${className || ""}`}
      aria-label="Breadcrumb"
    >
      {collapsed ? (
        <>
          {renderBreadcrumbItem(items[0], false, 0)}
          <RightArrow className="w-4 h-4 text-gray-400 " />
          <span className="text-gray-400">...</span>
          {renderBreadcrumbItem(items[total - 2], false, total - 2)}
          {renderBreadcrumbItem(items[total - 1], true, total - 1)}
        </>
      ) : (
        items.map((item, index) =>
          renderBreadcrumbItem(item, index === total - 1, index)
        )
      )}
    </nav>
  );
};

export default Breadcrumbs;
