import { RefObject, useRef, useState } from 'react'
import MenuBar from './MenuBar'
import Menu from './Menu'

function FilterableMenu() {
  const [search, setSearch] = useState('')
  const scrollRefs = {
    pizzas: useRef(null),
    kebabs: useRef(null),
    salads: useRef(null),
    pastas: useRef(null)
  }

  return (
    <div>
      <MenuBar search={search} setSearch={setSearch} scrollRefs={scrollRefs}/>
      <Menu search={search} scrollRefs={scrollRefs}/>
    </div>
  )
}

export default FilterableMenu