import Food from '../lib/types/Food'

function Card({number, name, price, ingredients}: Food) {
  return (
    <div className='flex flex-col bg-white rounded shadow m-2'>
      <div>{number.trim().length != 0 ? number + '. ' : ''}{name}</div>
      <div>{price + 'kr'}</div>
      <div>{ingredients}</div>
    </div>
  )
}

export default Card