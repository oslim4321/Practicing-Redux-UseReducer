import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './REDUX-TOOlKIT/counterSlice'
import {cakeOrdered, restorked, getVAl} from './CAKE-ORDER/cakeSlicer'
// import Content from './SELF-LEARN-REDUX/Content'
import reducer from './SELF-LEARN-REDUX/Index'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const cakeCount =useSelector((state)=> state.cakes.cake)
  const valu =useSelector((state)=> state.cakes.valu)
  const dispatch = useDispatch()
  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  //   .then(json => console.log(json))
  const [inp, setinp] = useState()
  const [amount, setamount] = useState()
  return (
    <div>
      <div>
        <h1>Counter</h1>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}> Decrement</button>
        
      </div>
      {/* <Content /> */}
      <h1>Cake Slicer</h1>
      <button onClick={()=> dispatch(cakeOrdered())}>Order Cake</button>
      <span>Num Cake : <span>{cakeCount}</span></span>
       <input type="number" value={amount} onChange={(e)=> setamount(Number(e.target.value))} />
      <button onClick={()=> dispatch(restorked(amount))}>Restork</button>

      <h1>This is redux learning</h1>
      <h3>{valu}</h3>
      <input type="text" value={inp} onChange={(e)=> setinp(e.target.value)} />
      <button onClick={()=> dispatch(getVAl(inp))}>Drop Value</button>
    </div>
  )
}



