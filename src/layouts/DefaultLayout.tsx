import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-slate-950 text-slate-100">
      <Header />
      <Outlet />
    </div>
  )
}
