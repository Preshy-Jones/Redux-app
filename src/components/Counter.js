import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/actions";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <div className="mt-10">
        <h1 className="text-center">Counter {counter}</h1>
        <div>
          <button
            className="bg-secondary2 rounded-md py-1 px-4 mr-4 text-white"
            onClick={() => dispatch(increment(2))}
          >
            Add
          </button>
          <button
            className="bg-secondary2 rounded-md py-1 px-4 text-white"
            onClick={() => dispatch(decrement(2))}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
