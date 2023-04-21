import { storyblokEditable } from '@storyblok/react'
import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Navigation } from 'components/navigation'
import { useStore } from 'lib/store'
import { forwardRef } from 'react'
import { shallow } from 'zustand/shallow'
import s from './header.module.scss'

export const Header = forwardRef(({ data }, ref) => {
  const [navIsOpened, setNavIsOpened] = useStore(
    ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
    shallow
  )

  return (
    <header className={s.header} ref={ref} {...storyblokEditable(data)}>
      <Navigation />
      <div className={cn('layout-block', s.head)}>
        <button
          onClick={() => {
            setNavIsOpened(!navIsOpened)
          }}
        >
          menu
        </button>
        <div>
          {data.links.map(({ text, url }, idx) => (
            <Link href={url} key={`header-link-${idx}`}>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
