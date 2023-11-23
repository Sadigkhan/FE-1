import React, { useRef } from "react";

export default function Header({ setquery }) {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setquery(inputRef.current.value);
  };
  return (
    <header className="w-full h-20 bg-[#929292] flex justify-between items-center px-4">
      <h1 className="text-[40px] font-bold">Logo</h1>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="outline-none h-10 w-[300px] p-4 text-[20px]"
        />
        <button type="submit" className="w-15 h-10 bg-green-600 px-4">
          Axtar
        </button>
      </form>
    </header>
  );
}
