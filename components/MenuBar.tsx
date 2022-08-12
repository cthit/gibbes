import { RefObject, useRef } from 'react'
import MenuButton from './MenuButton'

interface MenuBarProps {
  search: string
  setSearch: (search: string) => void
  scrollRefs: {
    pizzas: RefObject<HTMLDivElement>
    kebabs: RefObject<HTMLDivElement>
    salads: RefObject<HTMLDivElement>
    pastas: RefObject<HTMLDivElement>
  }
}

function MenuBar({ search, setSearch, scrollRefs }: MenuBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      e.target.blur();
    }
  }

  const topBarRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={topBarRef} className='sticky top-0 bg-slate-800 py-2 flex flex-col gap-y-1 md:gap-y-2'>
      <input className='text-slate-800 py-2 text-xl rounded border-black border-2 text-center'
        type='text' placeholder='Search for name/ingredient' value={search} onChange={handleSearch} onKeyDown={handleKeyPress} />
      <div className='flex justify-center gap-x-2 md:gap-x-8'>
        <MenuButton name={'Pizzas'} topBarRef={topBarRef} scrollRef={scrollRefs.pizzas} />
        <MenuButton name={'Kebabs'} topBarRef={topBarRef} scrollRef={scrollRefs.kebabs} />
        <MenuButton name={'Salads'} topBarRef={topBarRef} scrollRef={scrollRefs.salads} />
        <MenuButton name={'Pastas'} topBarRef={topBarRef} scrollRef={scrollRefs.pastas} />
      </div>
    </div>
  )
}

export default MenuBar
