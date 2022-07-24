import { RefObject, useRef } from "react"

interface MenuBarProps {
  search: string
  setSearch: (search: string) => void
  scrollRefs: {
    pizzas: RefObject<HTMLInputElement>
    kebabs: RefObject<HTMLInputElement>
    salads: RefObject<HTMLInputElement>
    pastas: RefObject<HTMLInputElement>
  } 
}

function MenuBar({search, setSearch, scrollRefs}: MenuBarProps) {  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const topBarRef = useRef<HTMLDivElement>(null)

  const scrollToCategory = (ref: RefObject<HTMLInputElement>) => {
    const topBarHeight = topBarRef.current?.clientHeight || 0;
    if (ref) {
      const y = (ref.current?.getBoundingClientRect().top || 0) + window.scrollY - topBarHeight
      console.log(topBarHeight)
      console.log(y)
      window.scrollTo({top: y, behavior: 'smooth' })
    }
  }

  return (
    <div ref={topBarRef} className='flex flex-row sticky top-0 justify-around bg-red-600 py-2 text-white'>
      <div className="cursor-pointer text-5xl select-none" onClick={() => scrollToCategory(scrollRefs.pizzas)}>Pizzas</div>
      <div className="cursor-pointer text-5xl select-none" onClick={() => scrollToCategory(scrollRefs.kebabs)}>Kebabs</div>
      <input type='text' placeholder='Search for name/ingredient' className='rounded border-black border-2 text-black' value={search} onChange={handleSearch}/>
      <div className="cursor-pointer text-5xl select-none" onClick={() => scrollToCategory(scrollRefs.salads)}>Salads</div>
      <div className="cursor-pointer text-5xl select-none" onClick={() => scrollToCategory(scrollRefs.pastas)}>Pastas</div>
    </div>
  )
}

export default MenuBar