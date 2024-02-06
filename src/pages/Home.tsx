import { useContext } from 'react'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Profile } from '../components/Profile'
import { IssuesContext } from '../contexts/IssuesContext'

export function Home() {
  const { issues } = useContext(IssuesContext)

  return (
    <main className="h-screen max-w-4xl">
      <Profile />
      <div className="mb-3 mt-16 flex w-full justify-between">
        <h2 className="text-lg font-bold">Publicações</h2>
        <span className="text-sm text-slate-400">
          {issues.length === 1
            ? `${issues.length} publicação`
            : `${issues.length} publicações`}
        </span>
      </div>
      <Input />
      <div className="mt-12 grid grid-cols-2 gap-8">
        {issues.map((issue) => (
          <Card
            key={issue.number}
            id={issue.number}
            title={issue.title}
            date={issue.updated_at}
            description={issue.body}
          />
        ))}
      </div>
    </main>
  )
}
