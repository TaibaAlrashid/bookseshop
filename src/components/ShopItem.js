import { Link } from "react-router-dom";

const ShopItem = ({ shop }) => {
  return (
    <>
      <p>{shop.name}</p>
      <Link to={`/shops/${shop.slug}`}>
        <img src={shop.image} alt={shop.name} />
      </Link>
    </>
  );
};

export default ShopItem;
