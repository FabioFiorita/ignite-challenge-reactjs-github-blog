import { useContext } from 'react'
import { IssuesContext } from '../contexts/IssuesContext'

export function Input() {
  const { query, onChangeQuery } = useContext(IssuesContext)
  return (
    <input
      className="w-full border-slate-600 bg-slate-900 px-4 py-3 active:border-slate-400"
      type="text"
      placeholder="Buscar conteúdo"
      value={query}
      onChange={(e) => onChangeQuery(e.target.value)}
    />
  )
}
