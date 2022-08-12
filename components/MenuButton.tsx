import { RefObject } from 'react'

interface MenuButtonProps {
  name: string,
  topBarRef: RefObject<HTMLDivElement>,
  scrollRef: RefObject<HTMLDivElement>
}

function MenuButton({ name, topBarRef, scrollRef }: MenuButtonProps) {
  const scrollToCategory = (ref: RefObject<HTMLDivElement>) => {
    const topBarHeight = topBarRef.current?.clientHeight || 0;
    if (ref) {
      const y = (ref.current?.getBoundingClientRect().top || 0) + window.scrollY - topBarHeight
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className='text-xl md:text-4xl cursor-pointer text-white select-none bg-cyan-800 rounded 
      py-1 px-1 md:py-2 md:px-8' onClick={() => scrollToCategory(scrollRef)}>{name}</div>
  )
}

export default MenuButton
