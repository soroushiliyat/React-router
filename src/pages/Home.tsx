import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={() => navigate('/products')}>Watch Products</button>
<button onClick={() => navigate('/dashboard')}>Enter to dashboard</button>

    </div>
  );
}

export default Home;
