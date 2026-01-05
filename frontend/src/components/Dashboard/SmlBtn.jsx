import React from "react";

export default function SmlBtn({ icon, text }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1 border-b-2  border-gray-300 leading-relaxed tracking-lg text-sm font-medium text-body hover:text-blue-400 hover:border-b-blue-600 focus:outline-none cursor-pointer"
    >
      {text}
      {icon}
    </button>
  );
}
