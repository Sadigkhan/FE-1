import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [oldData, setoldData] = useState([]);
  const [query, setquery] = useState("");
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setoldData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData(
      oldData.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      })
    );
  }, [query]);

  return (
    <>
      <Header query={query} setquery={setquery} />
      <div className="flex flex-wrap justify-center">
        {data.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default App;
