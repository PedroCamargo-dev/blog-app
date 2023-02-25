import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div className="flex mt-16 justify-center py-10 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
