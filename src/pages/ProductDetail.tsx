import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details for item {id}</h2>
    </div>
  );
}

export default ProductDetail;
