import React from "react";

export default function SmlBtn({
  icon,
  text,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-1 border-b-2  border-gray-300 leading-relaxed tracking-lg text-xs font-medium text-body hover:text-blue-400 hover:border-b-blue-600 focus:outline-none cursor-pointer ${className}`}
    >
      {text}
      {icon}
    </button>
  );
}
