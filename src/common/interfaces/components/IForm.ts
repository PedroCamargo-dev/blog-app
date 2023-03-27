import { ReactNode } from 'react'

export interface FormProps {
  title: string
  children: ReactNode
  onSubmit: any
  extraClass?: string
}
