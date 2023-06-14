import { GridProps } from '@/common/interfaces/components/IGrid'

export default function Grid({
  cols,
  smcols,
  mdcols,
  lgcols,
  xlcols,
  gap,
  children,
  extraClass,
}: GridProps) {
  const minCols: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
  }

  const smCols: Record<number, string> = {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
  }

  const mdCols: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  const lgCols: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }

  const xlCols: Record<number, string> = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
  }

  return (
    <div
      className={`
        grid
        gap-${gap} 
        ${extraClass}  
        ${minCols[cols]}
        ${smCols[smcols]}
        ${mdCols[mdcols]}
        ${lgCols[lgcols]}
        ${xlCols[xlcols]}
      `}
    >
      {children}
    </div>
  )
}
