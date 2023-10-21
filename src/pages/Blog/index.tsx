import { useEffect, useState } from 'react'

import { PostsList } from './components/PostsList'
import { Profile } from './components/Profile'
import { BlogPageContainer } from './styled'
import { http } from '../../libs/axios'
import { Search } from './components/Search'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  id: number
  title: string
  body: string
  comments: number
  number: number
  created_at: string
  html_url: string
  user: {
    login: string
  }
}

export function BlogPage() {
  const [posts, setPosts] = useState<IPost[]>([])

  function getPosts(query: string = '') {
    http
      .get(`/search/issues?q=${query}%20repo:${username}/${reponame}`)
      .then((response) => {
        setPosts(response.data.items)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  useEffect(getPosts, [])

  return (
    <BlogPageContainer className="container">
      <Profile />
      <Search postsLength={posts.length} getPosts={getPosts} />
      <PostsList posts={posts} />
    </BlogPageContainer>
  )
}
