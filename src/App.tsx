import './App.css'
import ItemCounter from './ItemCounter'
import itemsInCart from './ItemInCartData'


export default function App() {
 
  return (
    <>
      <h1>Shopping Car</h1>
      <p>This is a simple React counter application.</p>
      {itemsInCart.map(({ itemName, quantity }) => (
        <ItemCounter
          key={itemName}
          productName={itemName}
          quantity={quantity}
          onIncrement={() => {}}
          onDecrement={() => {}}
        />
      ))}
    </>
  )
}

