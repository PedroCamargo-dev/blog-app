import { InputProps } from '@/common/interfaces/components/IInput'

export default function Input({
  id,
  name,
  label,
  type,
  value,
  extraClass,
  placeholder,
}: InputProps) {
  return (
    <>
      <label htmlFor={name} className="ml-[-0.5rem]">
        {label}
      </label>
      <input
        id={id}
        {...name}
        type={type}
        value={value}
        className={`${extraClass} mt-[0.2rem] mb-3 block 
        appearance-none rounded-sm border px-2 py-2
        outline-none sm:text-sm`}
        placeholder={placeholder}
      />
    </>
  )
}
