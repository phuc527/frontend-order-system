import { useState } from "react";

import { searchProducts } from "../api/productApi";

import SearchBar from "../components/SearchBar";

import ProductCard from "../components/ProductCard";

export default function Products() {
  const [keyword, setKeyword] = useState("");

  const [products, setProducts] = useState([]);

  async function handleSearch() {
    const result = await searchProducts(keyword);

    const items = result.hits?.hits ?? [];

    setProducts(items.map((item) => item._source));
  }

  return (
    <div>
      <h1>Product Search</h1>

      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
      />

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
