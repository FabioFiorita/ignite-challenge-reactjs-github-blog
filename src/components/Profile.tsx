import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface ProfileProps {
  login: string
  bio: string
  avatar_url: string
  followers: number
  company: string
  url: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)
  async function fetchProfile() {
    axios.get('https://api.github.com/users/fabiofiorita').then((response) => {
      setProfile(response.data)
    })
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <div className="-mt-20 flex gap-8 rounded-lg bg-slate-800 px-10 py-8 text-slate-400">
      <img
        className="size-36 rounded object-cover"
        src={profile.avatar_url}
        alt=""
      />
      <div className="flex-1">
        <div className="mb-2 flex items-start justify-between">
          <h1 className="text-2xl font-bold text-slate-100">Fabio Fiorita</h1>
          <a
            className="flex items-center gap-2 text-blue-400 hover:border-b hover:border-blue-400"
            href={profile.url}
          >
            <span className="font-bold ">GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="mb-8">{profile.bio}</p>
        <div className="flex items-center justify-start gap-8">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} />
            <span>{profile.login}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} />
            <span>{profile.company ? profile.company : 'Sem Empresa'}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${profile.followers} seguidores`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
