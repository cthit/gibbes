import { RefObject } from 'react'
import data from '../data/data.json'
import Food from '../lib/types/Food'
import Category from './Category'

const pizzas: Food[] = data.pizzas
const kebabs: Food[] = data.kebabs
const salads: Food[] = data.salads
const pastas: Food[] = data.pastas

interface MenuProps {
  search: string,
  scrollRefs: {
    pizzas: RefObject<HTMLInputElement>
    kebabs: RefObject<HTMLInputElement>
    salads: RefObject<HTMLInputElement>
    pastas: RefObject<HTMLInputElement>
  } 
}

function Menu ({search, scrollRefs}: MenuProps) {
  return (
    <>
    <Category category='Pizzas' search={search} scrollRef={scrollRefs.pizzas} foods={pizzas}/>
    <Category category='Kebabs' search={search} scrollRef={scrollRefs.kebabs} foods={kebabs}/>
    <Category category='Salads' search={search} scrollRef={scrollRefs.salads} foods={salads}/>
    <Category category='Pastas' search={search} scrollRef={scrollRefs.pastas} foods={pastas}/>
    </>
  )
}

export default Menu