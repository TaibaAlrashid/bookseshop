import products from '../products'
import { ListWrapper } from '../styles';
import ProductItem from './ProductItem'
import SearchBar from './SearchBar';
import {useState} from "react";

const ProductList = (props) => {
    const [query, setQuery] = useState("");
    const productsList = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))    
    .map((product) => (
        <ProductItem 
            setProduct={props.setProduct}
            product={product}
            id={product.id}
        />
));

return (
    <div>
    <SearchBar setQuery={setQuery}/> 
    <ListWrapper>{productsList}</ListWrapper>
    </div>
)
};

export default ProductList;