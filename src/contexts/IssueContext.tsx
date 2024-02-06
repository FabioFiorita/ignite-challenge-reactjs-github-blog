import axios from 'axios'
import { createContext, useState } from 'react'

export interface Issue {
  title: string
  number: number
  updated_at: string
  comments: number
  url: string
  user: {
    login: string
  }
  body: string
}

interface IssueContextType {
  issue: Issue
  fetchIssue: (id: number) => void
}

interface IssuesProviderProps {
  children: React.ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssuesProviderProps) {
  const [issue, setIssue] = useState<Issue>({} as Issue)

  function fetchIssue(id: number) {
    axios
      .get(
        `https://api.github.com/repos/fabiofiorita/ignite-challenge-reactjs-github-blog/issues/${id}`,
      )
      .then((response) => {
        setIssue(response.data)
      })
  }

  return (
    <IssueContext.Provider value={{ issue, fetchIssue }}>
      {children}
    </IssueContext.Provider>
  )
}
