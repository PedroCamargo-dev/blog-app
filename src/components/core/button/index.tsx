interface ButtonProps {
  label: string;
}

export default function Button({
  label,
}: ButtonProps) {
  return (
    <button className="bg-transparent w-full hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded-sm duration-300">
      {label}
    </button>
  );
}
