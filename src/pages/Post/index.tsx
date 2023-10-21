import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostInfo } from './components/PostInfo'
import { PostContent, PostPageContainer } from './styles'
import { http } from '../../libs/axios'
import { IPost } from '../Blog'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function PostPage() {
  const [postData, setPostData] = useState<IPost>({} as IPost)

  const { issueNumber } = useParams()

  function getPostData() {
    http
      .get(`/repos/${username}/${reponame}/issues/${issueNumber}`)
      .then((response) => {
        setPostData(response.data)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  useEffect(getPostData, [issueNumber])

  return (
    <PostPageContainer className="container">
      <PostInfo postData={postData} />
      <PostContent>
        <Markdown remarkPlugins={[remarkGfm]}>{postData.body}</Markdown>
      </PostContent>
    </PostPageContainer>
  )
}
