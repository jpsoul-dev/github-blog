import styled from 'styled-components'

export const PostsListContainer = styled.section`
  color: blue;
  height: 26rem;
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
`

export const PostSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      height: 6.4rem;
      font: ${({ theme }) => theme.texts['title-m']};
      color: ${({ theme }) => theme.colors['base-title']};

      overflow: hidden;
    }

    span {
      white-space: nowrap;
      font: ${({ theme }) => theme.texts['regular-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  p {
    font: ${({ theme }) => theme.texts['regular-text-m']};
    color: ${({ theme }) => theme.colors['base-text']};
    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
