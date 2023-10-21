import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { PostInfoContainer, PostInfoHeader } from './styles'
import { IconLabel } from '../../../../components/IconLabel'
import { ExternalLink } from '../../../../components/ExternalLink'
import { formatDistanceCustom } from '../../../../utils/formaters'
import { IPost } from '../../../Blog'

interface PostInfoProps {
  postData: IPost
}

export function PostInfo({ postData }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <Link to={'/'}>
          <span>{<FontAwesomeIcon icon={faChevronLeft} />} voltar</span>
        </Link>
        <ExternalLink text="ver no github" url={postData.html_url} />
      </PostInfoHeader>
      <h2>{postData.title}</h2>
      <div>
        {postData.user && (
          <IconLabel
            text={postData.user.login}
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
        )}
        <IconLabel
          text={formatDistanceCustom(new Date(postData.created_at), new Date())}
          icon={<FontAwesomeIcon icon={faCalendarDay} />}
        />
        <IconLabel
          text={`${postData.comments} comentários`}
          icon={<FontAwesomeIcon icon={faComment} />}
        />
      </div>
    </PostInfoContainer>
  )
}
