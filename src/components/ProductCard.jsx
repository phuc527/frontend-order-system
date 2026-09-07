export default function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>Price: {product.price}</p>

      <p>Category: {product.category}</p>
    </div>
  );
}
