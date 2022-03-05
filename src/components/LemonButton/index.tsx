import { LemonButtonIcon } from './LemonButtonIcon'
import type { LemonButtonProps } from './types'
import styles from './styles.module.css'

export const LemonButton = ({
  color = 'primary',
  icon,
  disabled = false,
  children,
  ...otherProps
}: LemonButtonProps) => {
  // Array of styles to apply to the button
  // Makes it easier to add new styles
  const lemonButtonClassNames = [
    styles.lemonButton,
    styles[color],
    icon ? styles.withIcon : '',
  ]

  return (
    <button
      disabled={disabled}
      className={lemonButtonClassNames.join(' ')}
      {...otherProps}
    >
      <span className={styles.contentWrapper}>{children}</span>
      {/* Only display the icon if there is a children */}
      {children && icon ? <LemonButtonIcon icon={icon} /> : null}
    </button>
  )
}
