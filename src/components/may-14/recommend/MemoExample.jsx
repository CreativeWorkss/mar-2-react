import React, { useEffect, useState, useMemo } from "react";

function MemoExample() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  // useMemo for filtering
  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        style={{ padding: "10px", width: "300px" }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <img src={item.thumbnail} alt={item.title} width="60" />
            <div>
              <h4>{item.title}</h4>
              <p>₹ {item.price}</p>
              <p>⭐ {item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoExample;
