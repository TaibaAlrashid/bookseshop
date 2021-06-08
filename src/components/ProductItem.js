const ProductItem = (props) => {
    return (
        <div key={props.id}>
            <img alt={props.name} className="book" src={props.image}/>
            <p className="text1">{props.name}</p>
            <p className="text1">{props.price} KD</p>
        </div>
    );
};

export default ProductItem;