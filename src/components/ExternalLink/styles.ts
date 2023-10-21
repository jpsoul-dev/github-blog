import styled from 'styled-components'

export const ExternalLinkContainer = styled.div`
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors['brand-blue']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    font: ${({ theme }) => theme.components.link};
    color: ${({ theme }) => theme.colors['brand-blue']};
    text-transform: uppercase;
  }

  svg {
    color: ${({ theme }) => theme.colors['brand-blue']};
    font-size: 1.2rem;
  }
`
