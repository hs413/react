import {Link, useNavigate} from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }


  return (
      <>
        <h1>home</h1>
        <p>
          Go to <Link to="products">product</Link>
        </p>
        <p>
          <button onClick={navigateHandler}>Navigate</button>
        </p>
      </>
  )
}

export default HomePage;