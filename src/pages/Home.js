import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const onClickProductHandler = () => {
        navigate('/products');
    }
    
    return(<main>
        <h1>Home Page</h1>
        <p>
            Go to <Link to="/products">the list of products</Link>.
        </p>
        <button onClick={onClickProductHandler}>Products</button>
    </main>)
}

export default Home;