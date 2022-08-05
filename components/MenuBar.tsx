import { RefObject, useRef } from "react"

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
    if (e.key.toLowerCase() === "enter") {
      e.target.blur();
    }
  }

  const topBarRef = useRef<HTMLDivElement>(null)

  const scrollToCategory = (ref: RefObject<HTMLDivElement>) => {
    const topBarHeight = topBarRef.current?.clientHeight || 0;
    if (ref) {
      const y = (ref.current?.getBoundingClientRect().top || 0) + window.scrollY - topBarHeight
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div ref={topBarRef} className='grid grid-cols-4 text-center text-lg md:text-4xl sticky top-0 bg-slate-800 py-2'>
      <input className='col-span-5 text-slate-800 py-2 rounded border-black border-2 text-base text-center'
        type='text' placeholder='Search for name/ingredient' value={search} onChange={handleSearch} onKeyDown={handleKeyPress} />
      <div className="cursor-pointer select-none" onClick={() => scrollToCategory(scrollRefs.pizzas)}>Pizzas</div>
      <div className="cursor-pointer select-none" onClick={() => scrollToCategory(scrollRefs.kebabs)}>Kebabs</div>
      <div className="cursor-pointer select-none" onClick={() => scrollToCategory(scrollRefs.salads)}>Salads</div>
      <div className="cursor-pointer select-none" onClick={() => scrollToCategory(scrollRefs.pastas)}>Pastas</div>
    </div>
  )
}

export default MenuBar
