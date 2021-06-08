const ProductItem = (props) => {
    return (
        <div key={props.id}>
            <img alt={props.name} className="book" src={props.image}/>
            <p className="text">{props.name}</p>
            <p className="text">{props.price} KD</p>
        </div>
    );
};

export default ProductItem;