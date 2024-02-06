import effect1 from '../assets/effect1.png'
import effect2 from '../assets/effect2.png'
import logo from '../assets/logo.png'

export function Header() {
  return (
    <header className="flex justify-between bg-slate-800 pb-8">
      <img className="mt-16 h-48 max-w-96" src={effect1} alt="" />
      <img className="mt-16 h-24 w-36" src={logo} alt="" />
      <img className="mt-8 h-56 max-w-96" src={effect2} alt="" />
    </header>
  )
}
