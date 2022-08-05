function CategoryHeader({ category }: { category: string }) {
  return (
    <div className='text-center rounded py-2 text-4xl select-none'>
      {category}
    </div>
  )
}

export default CategoryHeader
