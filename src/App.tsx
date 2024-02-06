import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssueProvider } from './contexts/IssueContext'
import { IssuesProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <BrowserRouter>
      <IssuesProvider>
        <IssueProvider>
          <Router />
        </IssueProvider>
      </IssuesProvider>
    </BrowserRouter>
  )
}
