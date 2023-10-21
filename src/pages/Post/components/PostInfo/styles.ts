import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  height: 16.8rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  && {
    margin-top: -8.8rem;
  }
  padding: 3.2rem 3.2rem 3.2rem 4rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h2 {
    margin-top: 2rem;
    font: ${({ theme }) => theme.texts['title-l']};
    color: ${({ theme }) => theme.colors['base-title']};
  }

  > div {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
`

export const PostInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.colors['brand-blue']};
    font: ${({ theme }) => theme.components.link};
    text-transform: uppercase;
  }
`
