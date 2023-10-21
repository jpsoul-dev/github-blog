import { PostSummary, PostsListContainer } from './styles'

import { formatDistanceCustom } from '../../../../utils/formaters'
import { IPost } from '../..'
import { useNavigate } from 'react-router-dom'

interface PostListProps {
  posts: IPost[]
}

export function PostsList(props: PostListProps) {
  const navigate = useNavigate()

  return (
    <PostsListContainer>
      {props.posts.map((post) => {
        return (
          <PostSummary
            key={post.id}
            onClick={() => {
              navigate(`/post/${post.number}`)
            }}
          >
            <div>
              <h3>{post.title}</h3>
              <span>
                {formatDistanceCustom(new Date(post.created_at), new Date())}
              </span>
            </div>
            <p>{post.body}</p>
          </PostSummary>
        )
      })}
    </PostsListContainer>
  )
}
