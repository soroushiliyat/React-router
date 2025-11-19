import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'محصول اول' },
  { id: '2', name: 'محصول دوم' },
];

function Products() {
  return (
    <div>
      <h2>لیست محصولات</h2>
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