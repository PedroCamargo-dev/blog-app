import { ReactNode } from 'react'

export interface GridProps {
  cols?: any
  smcols?: any
  mdcols?: any
  lgcols?: any
  xlcols?: any
  gap?: any
  extraClass?: string
  children: ReactNode
}
