import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store"
import { decrement, increment } from "../../reducers/counterSlice";

export default function MyDevices() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch =  useDispatch();
    return (
    <div>
        <h2>Devices</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    )
}