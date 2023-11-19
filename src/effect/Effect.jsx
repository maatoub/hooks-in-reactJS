import React, { useEffect, useRef, useState } from "react";

const Effect = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const refInput = useRef(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  useEffect(() => {
    const filterPro = products.filter((p) =>
      p.title.toLowerCase().includes(inputValue)
    );
    setFilteredProducts(filterPro);
  }, [inputValue]);

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-group w-100 mt-3">
        <div className="form-outline">
          <input
            ref={refInput}
            type="search"
            id="form1"
            placeholder="search"
            className="form-control"
            onInput={handleInput}
          />
        </div>
      </div>
      <div className="row mt-5">
        {filteredProducts.map((e) => (
          <div key={e.id} className="col-4">
            <div className="card mt-2">
              <img className="card-img-top" src={e.image} alt={e.title} />
              <div className="card-body">
                <h5 className="card-title p-2">{e.title}</h5>
                <p>{e.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Effect;
