import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

interface Issue {
  title: string
  number: number
  updated_at: string
  body: string
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (q?: string) => void
  query: string
  onChangeQuery: (q: string) => void
}

interface IssuesProviderProps {
  children: React.ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([] as Issue[])
  const [query, setQuery] = useState('')

  function onChangeQuery(q: string) {
    setQuery(q)
  }

  function fetchIssues() {
    axios
      .get(
        `https://api.github.com/search/issues?q=${query}repo:fabiofiorita/ignite-challenge-reactjs-github-blog`,
      )
      .then((response) => {
        setIssues(response.data.items)
      })
  }

  useEffect(() => {
    fetchIssues()
  }, [query])

  return (
    <IssuesContext.Provider
      value={{ issues, fetchIssues, query, onChangeQuery }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
