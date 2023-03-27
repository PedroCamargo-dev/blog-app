import { ButtonProps } from '@/common/interfaces/components/IButton'

export default function Button({ label, extraClass }: ButtonProps) {
  return (
    <button
      className={`${extraClass} w-full rounded-sm text-center text-sm duration-300`}
    >
      {label}
    </button>
  )
}
