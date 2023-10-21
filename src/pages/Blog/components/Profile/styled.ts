import styled from 'styled-components'

export const ProfileContainer = styled.section`
  position: relative;
  height: 21.2rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  && {
    margin-top: -8.8rem;
  }
  padding: 3.2rem 3.2rem 3.2rem 4rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 3.2rem;

  > img {
    width: 148px;
    border-radius: 8px;
  }

  > div:first-of-type {
    position: absolute;
    top: 40px;
    right: 41px;
  }
`

export const ProfileInfo = styled.div`
  height: 100%;
  width: 100%;

  > h2 {
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.colors['base-title']};
    font: ${({ theme }) => theme.texts['title-l']};
  }

  > p {
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.colors['base-text']};
    font: ${({ theme }) => theme.texts['regular-text-m']};
  }

  > div {
    margin-top: 2.4rem;

    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`
