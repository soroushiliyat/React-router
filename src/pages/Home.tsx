import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>صفحه اصلی</h1>
      <button onClick={() => navigate('/products')}>مشاهده محصولات</button>
<button onClick={() => navigate('/dashboard')}>ورود به داشبورد</button>

    </div>
  );
}

export default Home;