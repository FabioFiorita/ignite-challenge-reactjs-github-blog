import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'
import { Issue } from '../contexts/IssueContext'

interface PostProps {
  issue: Issue
}

export function Post({ issue }: PostProps) {
  return (
    issue && (
      <div className="min-w-4xl -mt-20 flex w-full flex-col rounded-lg bg-slate-800 px-10 py-8 text-slate-400">
        <div className="mb-5 flex justify-between">
          <NavLink
            className="flex items-center gap-2 text-blue-400 hover:border-b hover:border-blue-400"
            to={'/'}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className="font-bold ">VOLTAR</span>
          </NavLink>
          <a
            className="flex items-center gap-2 text-blue-400 hover:border-b hover:border-blue-400"
            href={issue.url}
          >
            <span className="font-bold ">GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1 className="text-2xl font-bold text-slate-100">{issue.title}</h1>
        <div className="mt-2 flex items-center justify-start gap-8">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.user.login}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {formatDistanceToNow(new Date(issue.updated_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments}</span>
          </div>
        </div>
      </div>
    )
  )
}
