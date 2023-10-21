import styled from 'styled-components'

export const SearchContainer = styled.form`
  margin-top: 7.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font: ${({ theme }) => theme.texts['title-s']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font: ${({ theme }) => theme.texts['regular-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  input {
    height: 5rem;
    padding: 1.2rem 1.6rem;
    color: ${({ theme }) => theme.colors['base-text']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-input']};

    &::placeholder {
      font: ${({ theme }) => theme.texts['regular-text-m']};
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      font: ${({ theme }) => theme.texts['regular-text-m']};
      outline: 1px solid ${({ theme }) => theme.colors['brand-blue']};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
    font: ${({ theme }) => theme.texts['regular-text-s']};
  }
`
