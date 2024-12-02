import React, { useId, forwardRef } from "react";

const Select = forwardRef(function Select(
  { options = [], label, className = "", ...props },
  ref
) {
  const id = useId(); 
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 pl-1">
        {label}
        </label>
    )}
    <select
        {...props}
        id={id}
        ref={ref}
            className={`px-3 py-2 rounded-lg bg-white
            text-black outline-none focus:bg-gray-50
            duration-200 border border-gray-200 w-full ${className}`}
    >
        {options.map((option, index) => (
        <option key={index} value={option}>
            {option}
            </option>
        ))}
    </select>
    </div>
);
});

export default Select;
