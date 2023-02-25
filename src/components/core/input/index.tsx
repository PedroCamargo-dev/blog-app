import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type: HTMLInputTypeAttribute;
  extraClass?: string;
  placeholder?: string;
}

export default function Input({
  id,
  label,
  name,
  type,
  extraClass = "",
  placeholder,
}: InputProps) {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={`${extraClass} appearance-none block
        px-3 py-2 mb-3 h-11 w-64 rounded-md border border-gray-300
        placeholder-gray-500 text-gray-900
        focus:outline-none focus:ring-indigo-600
        focus:border-indigo-600 focus:z-10 sm:text-sm duration-500`}
        placeholder={placeholder}
      />
    </>
  );
}
