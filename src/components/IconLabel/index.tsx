import { ReactNode } from 'react'

import { IconLabelContainer } from './styles'

interface IconLabelProps {
  icon: ReactNode
  text: string
}

export function IconLabel({ icon, text }: IconLabelProps) {
  return (
    <IconLabelContainer>
      {icon}
      <span>{text}</span>
    </IconLabelContainer>
  )
}
