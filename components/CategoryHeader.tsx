function CategoryHeader({category}: {category: string}) {
  return (
    <div className='text-center rounded py-2 text-4xl select-none bg-red-600 text-white'>
      {category}
    </div>
  )
}

export default CategoryHeader