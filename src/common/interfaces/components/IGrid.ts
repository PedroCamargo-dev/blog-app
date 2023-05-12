import { ReactNode } from 'react'

export interface GridProps {
  cols?: number
  smcols?: number
  mdcols?: number
  gap?: number
  extraClass?: string
  children: ReactNode
}
