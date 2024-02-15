import "./App.css";

import {
  decrement,
  decrementByValue,
  increment,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counterrr);
  const numberOfSlashes = useAppSelector(
    (state) => state.counterrr.numberOfSlashes
  );
  // const k = useSelector((state) => state.counterrr.count);

  // state.counterrr---ei counterrr holo jeta reducer er moddhe ase r destructure kore anbe initial state er count

  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center">
      <div className="flex space-x-7 text-6xl bg-slate-300 p-6 rounded-md">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-400 p-3 rounded-xl border-y-8 border-blue-800 shadow-2xl"
        >
          Increment
        </button>
        <h1 className=" text-blue-700 font-extrabold">{count}</h1>

        {/* Conditional rendering of the slash */}
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-400 p-3 rounded-xl"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="bg-red-400 p-3 rounded-xl "
        >
          IncrementBy5
        </button>
      </div>
      {Array.from({ length: numberOfSlashes }, (_, index) => (
        <div key={index} className="text-4xl">
          /
        </div>
      ))}
    </div>
  );
}

export default App;
