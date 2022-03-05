import CheckIcon from './assets/check.svg'
import RefreshIcon from './assets/refresh.svg'
import ArrowRightIcon from './assets/arrow-right.svg'
import { cloneElement } from 'react'

type LemonButtonIconProps = {
  icon: 'check' | 'refresh' | 'arrow-right'
}

const IconType = {
  check: <CheckIcon />,
  refresh: <RefreshIcon />,
  'arrow-right': <ArrowRightIcon />,
}

export const LemonButtonIcon = ({ icon }: LemonButtonIconProps) => {
  /* 
    Clone the icon to add the img role dynamically.
    Used for testing.
  */
  const Icon = cloneElement(IconType[icon], {
    role: 'img',
  })

  return Icon
}
