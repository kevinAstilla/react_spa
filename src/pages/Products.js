import { Link } from "react-router-dom";

const PRODUCT_LIST = [
    {id: 'p1', title: 'product 1'},
    {id: 'p2', title: 'product 2'},
    {id: 'p3', title: 'product 3'},
]

const Products = () => {
    return(
    <main>
        <h1>Products</h1>
        <ul>
            {PRODUCT_LIST.map((product) => (
                <li key={product.id}><Link to={`${product.id}`}>{product.title}</Link></li>
            ))}
        </ul>
    </main>)
}

export default Products;