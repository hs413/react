import {Link} from "react-router-dom";

const PRODUCTS = [
  { id: 'p1', title: 'P 1'},
  { id: 'p2', title: 'P 2'},
  { id: 'p3', title: 'P 3'},
]

function ProductsPage() {
  return (
      <>
        <h1>Products Page</h1>
        <ul>
          {PRODUCTS.map(prod => (
              <li key={prod.id}>
                <Link to={`/products/${prod.id}`}>
                  {prod.title}
                </Link>
              </li>
          ))}
        </ul>
      </>
  )
}

export default ProductsPage;