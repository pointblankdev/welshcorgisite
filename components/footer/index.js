import { Link } from '@studio-freight/compono'
import s from './footer.module.scss'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="layout-block">
        <h2>
          <Link href="https://discord.gg/FphuFSjvR5">discord</Link>
        </h2>
      </div>
    </footer>
  )
}
