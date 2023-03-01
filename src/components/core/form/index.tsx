import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  title?: string;
  onSubmit?: any;
}

export default function Form({
  children,
  title,
  onSubmit,
}: FormProps) {
  return (
    <form
      action="#"
      className="max-w-lg"
      onSubmit={onSubmit}
    >
      <h2 className="text-left text-3xl mb-4 text-gray-900">
        {title}
      </h2>
      {children}
    </form>
  );
}
