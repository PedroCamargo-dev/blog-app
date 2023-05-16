import { ButtonProps } from '@/common/interfaces/components/IButton'

export default function Button({ label, extraClass, onClick }: ButtonProps) {
  return (
    <button
      className={`${extraClass} w-full rounded-sm text-center text-sm duration-300`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
