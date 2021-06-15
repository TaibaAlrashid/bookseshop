//data
import products from '../products'
//styles
import { ListWrapper } from '../styles';
//components
import ProductItem from './ProductItem'
import SearchBar from './SearchBar';
//useState
import {useState} from "react";

const ProductList = (props) => {
    const [query, setQuery] = useState("");
    const productsList = props.products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))    
    .map((product) => (
        <ProductItem 
            setProduct={props.setProduct}
            deleteProduct={props.deleteProduct}
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