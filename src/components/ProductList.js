import products from '../products'
import { ListWrapper } from '../styles';
import ProductItem from './ProductItem'

const ProductList = () => {
    const productsList = products.map((product) => (
        <ProductItem 
            name={product.name}
            price={product.price}
            image={product.image}
            id={product.id}
        />
));
return (
    <ListWrapper>
        {productsList}
    </ListWrapper>
)
};

export default ProductList;