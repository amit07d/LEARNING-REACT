import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full px-2 py-1 border rounded ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
