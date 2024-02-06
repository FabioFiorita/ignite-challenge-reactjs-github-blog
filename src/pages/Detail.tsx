import { useContext, useEffect } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Post } from '../components/Post'
import { IssueContext } from '../contexts/IssueContext'

export function Detail() {
  const { id } = useParams()
  const { issue, fetchIssue } = useContext(IssueContext)

  useEffect(() => {
    fetchIssue(Number(id))
  }, [id, fetchIssue])

  return (
    <main className="h-screen max-w-4xl">
      <Post issue={issue} />
      <div className="p-10">
        <Markdown>{issue.body}</Markdown>
      </div>
    </main>
  )
}
