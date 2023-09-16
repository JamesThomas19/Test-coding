import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {actions} from './redux/store'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const Addby = ()  => {
    dispatch(actions.Addby(10))
  }

  const StopZero = () => {
    dispatch(actions.nonAmount())
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Addby}>Add By 10</button>
      <br/>
      <button onClick={StopZero}>Stop</button>
    </div>
  )
}

export default App
