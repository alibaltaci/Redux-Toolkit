import { useRef, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset } from './store' 

function App() {

  const count = useSelector( (state) => state.value )
  const dispatch = useDispatch()

  const h1Ref = useRef()
  const [border, setBorder] = useState(false)

  const toogleBorderStyle = () => {
    if(border){
      h1Ref.current.style.border = 'none';
      h1Ref.current.style.backgroundColor =  'transparent';
    }else{
      h1Ref.current.style.border =  '1px solid black';
      h1Ref.current.style.backgroundColor =  'blue';
    }

    setBorder(!border)
    
  }

  return (
    <div >
      <h1 ref={h1Ref}>Count: {count}</h1>
      <button onClick={toogleBorderStyle}>{!border? 'Add Border' : 'Remove Border'}</button>
      <button onClick={ () => {dispatch(increment())} }>Increment</button>
      <button onClick={ () => {dispatch(decrement())} }>Decrement</button>
      <button onClick={ () => {dispatch(reset())} }>Reset</button>     
    </div>
  );
}

export default App;
