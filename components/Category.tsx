import Food from "../lib/types/Food"
import Card from "./Card"
import CategoryHeader from "./CategoryHeader"

interface CategoryProps {
  category: string
  search: string
  scrollRef: React.RefObject<HTMLDivElement>
  foods: Food[]
}

function Category({ category, search, scrollRef, foods }: CategoryProps) {
  search = search.trim().toLowerCase();
  let searchTerms = search.length > 0 ? search.split(/[, ]+/).map(term => term.trim()) : [];
  if (searchTerms.length > 0) {
    foods = foods.filter(food => {
      for (let i = 0; i < searchTerms.length; i++) {
        if (!(food.number.toLowerCase().includes(searchTerms[i]) ||
          food.name.toLowerCase().includes(searchTerms[i]) ||
          food.ingredients.toLowerCase().includes(searchTerms[i]))) {
          return false;
        }
      }
      return true;
    });
  }

  return (
    <div ref={scrollRef} className='mb-4'>
      <CategoryHeader category={category} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {foods.map((food) => <Card key={food.name} {...food} />)}
      </div>
    </div>
  )
}

export default Category
