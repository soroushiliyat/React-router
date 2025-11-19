import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Product one' },
  { id: '2', name: 'Product two' },
];

function Products() {
  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
