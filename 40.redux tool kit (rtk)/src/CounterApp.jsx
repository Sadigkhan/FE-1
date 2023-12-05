import React, { useRef } from "react";
import ViewCount from "./components/ViewCount";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./RTK/features/counter";

export default function CounterApp() {
  let inpRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let myVal = Number(inpRef.current.value);
    dispatch(incrementByAmount(myVal));
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <ViewCount />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <form onSubmit={handleSubmit}>
        <input className="bg-gray-300" ref={inpRef} type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
