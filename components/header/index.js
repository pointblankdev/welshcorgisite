import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Navigation } from 'components/navigation'
import { forwardRef } from 'react'
import s from './header.module.scss'

export const Header = forwardRef((_, ref) => {
  // const [navIsOpened, setNavIsOpened] = useStore(
  //   ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
  //   shallow
  // )

  return (
    <header className={s.header} ref={ref}>
      <Navigation />
      <div className={cn('layout-block', s.head)}>
        {/* <button
          onClick={() => {
            setNavIsOpened(!navIsOpened)
          }}
        >
          menu
        </button> */}
        <div />
        <div className={cn('links', s.links)}>
          <Link href="#about">about</Link>
          <Link href="#history">history</Link>
          <Link href="#disord">join</Link>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
