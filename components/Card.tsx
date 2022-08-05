import Food from '../lib/types/Food'

function Card({ number, name, price, ingredients }: Food) {
  return (
    <div className='flex flex-col bg-slate-600 rounded shadow-md p-2'>
      <div className='flex flex-row justify-between'>
        <div className='text-xl font-bold'>{number.trim().length != 0 ? number + '. ' : ''}{name}</div>
        <div className='text-xl'>{price + ':-'}</div>
      </div>
      <div className='text-lg'>{ingredients}</div>
    </div>
  )
}

export default Card
