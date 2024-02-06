import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  id: number
  title: string
  date: string
  description: string
}

export function Card({ id, title, date, description }: CardProps) {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(`/detail/${id}`)
  }

  return (
    <article
      className="min-w-96 cursor-pointer rounded-lg border border-slate-800 bg-slate-800 p-8 hover:border hover:border-slate-400"
      onClick={handleNavigate}
    >
      <div className="flex items-start gap-4">
        <h2 className="flex-1 text-xl font-bold">{title}</h2>
        <span className="text-sm text-slate-500">
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p className="mt-5 line-clamp-4 text-slate-400">{description}</p>
    </article>
  )
}
