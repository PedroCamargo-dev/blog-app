import { TitleProps } from '@/common/interfaces/components/ITitle'

export default function Title({ title, extraClass }: TitleProps) {
  return <p className={`text-2xl ${extraClass}`}>{title}</p>
}
