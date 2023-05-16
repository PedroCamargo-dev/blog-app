import { GridProps } from '@/common/interfaces/components/IGrid'

export default function Grid({
  cols,
  smcols,
  mdcols,
  gap,
  extraClass,
  children,
}: GridProps) {
  return (
    <div
      className={`grid grid-cols-${cols} gap-${gap} sm:grid-cols-${smcols} md:grid-cols-${mdcols} ${extraClass}`}
    >
      {children}
    </div>
  )
}
