import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'

import { IconLabel } from '../../../../components/IconLabel'
import { ProfileContainer, ProfileInfo } from './styled'
import { ExternalLink } from '../../../../components/ExternalLink'
import { http } from '../../../../libs/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  html_url: string
  login: string
  company?: string
  followers: string
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  function getProfileData() {
    http
      .get(`/users/${username}`)
      .then((response) => {
        setProfileData(response.data)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  useEffect(getProfileData, [])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <ExternalLink text="github" url={profileData.html_url} />
      <ProfileInfo>
        <h2>{profileData.name}</h2>
        <p>{profileData.bio}</p>
        <div>
          <IconLabel
            icon={<FontAwesomeIcon icon={faGithub} />}
            text={profileData.login}
          />
          {profileData?.company && (
            <IconLabel
              icon={<FontAwesomeIcon icon={faBuilding} />}
              text={profileData.company}
            />
          )}
          <IconLabel
            icon={<FontAwesomeIcon icon={faUserGroup} />}
            text={`${profileData.followers} seguidores`}
          />
        </div>
      </ProfileInfo>
    </ProfileContainer>
  )
}
