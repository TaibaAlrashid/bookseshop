import products from '../products'
import { ListWrapper } from '../styles';
import ProductItem from './ProductItem'
import SearchBar from './SearchBar';
import {useState} from "react";

const ProductList = () => {
    const [query, setQuery] = useState("");
    const productsList = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))    
    .map((product) => (
        <ProductItem 
            name={product.name}
            price={product.price}
            image={product.image}
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