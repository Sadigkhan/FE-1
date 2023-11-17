// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
export default function App() {
  const [first, setFirst] = useState("second");
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  //Case 1
  useEffect(() => {
   // getData();
  }, []);

  //Case 2
  useEffect(() => {
    console.log("useEffect ");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setFirst(Math.random());
        }}
      >
        Change state
      </button>
      <h1 className="content"> World</h1>
      <Header />
    </>
  );
}
