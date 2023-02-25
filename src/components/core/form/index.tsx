import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  title?: string;
}

export default function Form({
  children,
  title,
}: FormProps) {
  return (
    <form
      action="#"
      className="max-w-lg"
    >
      <h2 className="text-left text-3xl mb-4 text-gray-900">
        {title}
      </h2>
      {children}
    </form>
  );
}
