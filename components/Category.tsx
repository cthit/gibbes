import Fuse from "fuse.js"
import Food from "../lib/types/Food"
import Card from "./Card"
import CategoryHeader from "./CategoryHeader"

interface CategoryProps {
  category: string
  search: string
  scrollRef: React.RefObject<HTMLDivElement>
  foods: Food[]
}

function Category({category, search, scrollRef, foods}: CategoryProps) {
  const options = {
    keys: ['number', 'name', 'ingredients'],
    isCaseSensitive: false,
    threshold: 0.3,
  }

  if (search.trim().length > 0) {
    const fuse = new Fuse(foods, options)
    const result = fuse.search(search).map(({item}) => item)
    foods = result
  }

  return (
    <div ref={scrollRef}>
      <CategoryHeader category={category}/>
      <div className="flex flex-row flex-wrap">
        {foods.map((food) => <Card key={food.name} {...food}/>)}
      </div>
    </div>
  )
}

export default Category