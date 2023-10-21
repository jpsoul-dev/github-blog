import styled from 'styled-components'

export const PostPageContainer = styled.section``

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 4rem 3.2rem;
  margin-bottom: 12.8rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }
`
