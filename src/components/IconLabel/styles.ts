import styled from 'styled-components'

export const IconLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors['base-label']};
  }

  span {
    font: ${({ theme }) => theme.texts['regular-text-m']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
