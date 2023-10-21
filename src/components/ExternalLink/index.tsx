import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps {
  text: string
  url: string
}

export function ExternalLink({ text, url }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer>
      <a href={url} target="_blank">
        <span>{text}</span>
        {<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
      </a>
    </ExternalLinkContainer>
  )
}
