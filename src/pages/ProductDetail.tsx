import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>جزئیات محصول شماره {id}</h2>
    </div>
  );
}

export default ProductDetail;