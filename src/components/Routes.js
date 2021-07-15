import { Route, Switch } from "react-router";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ShopList from "./ShopList";
import ShopDetail from "./ShopDetail";
import bookStore from "../stores/bookStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <ProductList products={bookStore.products} />
      </Route>
      <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route>
        <Home exact path="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
