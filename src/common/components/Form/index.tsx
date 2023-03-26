import { FormProps } from '@/common/interfaces/components/IForm'

export default function Form({ title, children, extraClass }: FormProps) {
  return (
    <form className={`${extraClass} mt-44 grid justify-center`}>
      <h1 className="ml-[-0.5rem] mb-5 text-3xl">{title}</h1>
      {children}
    </form>
  )
}
