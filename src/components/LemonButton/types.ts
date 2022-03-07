import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary'
  disabled: boolean
}

// Children are optional if an icon is not provided
type ButtonWithoutIcon = {
  icon?: never
  children?: ReactNode
}

// But if an icon is provided, make the children be required
type ButtonWithIcon = {
  icon?: 'arrow-right' | 'check' | 'refresh'
  children: ReactNode
}

export type LemonButtonProps = CommonButtonProps &
  (ButtonWithoutIcon | ButtonWithIcon)
