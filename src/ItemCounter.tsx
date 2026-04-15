import { useCounter } from './assets/useCounter';
import './ItemCounter.css'

interface ItemCounterProps {
  productName: string;
  quantity: number | undefined;
  onIncrement: () => void;
  onDecrement: () => void
}

export default function ItemCounter({ 
  productName, 
  quantity, 
  onIncrement, 
  onDecrement 
}: ItemCounterProps) {

  const  { counter, increment, decrement } = useCounter( quantity ?? 1 ) 

  console.log('Rendering ItemCounter for', productName, 'with quantity', quantity, 'and onIncrement', onIncrement, 'and onDecrement', onDecrement);

  const handleAdd = () => increment() ;
  const handleSubtract = () => decrement();
  //console.log("Hello world from ItemCounter, counter value is", counter);

  return (
    <section className='item_row'>

      <span
        style={{
          color: counter === 1 ? 'crimson' : 'aqua',
        }}
      >
        {productName}
      </span>
      <button onClick={handleAdd} > 
        +1     
      </button>
      <span> {counter} </span>
      <button onClick={handleSubtract} > 
        -1         
      </button>
    </section>
  )
}
