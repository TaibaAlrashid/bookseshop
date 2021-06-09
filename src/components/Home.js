import { Description } from "../styles";
import { Title, ShopImage } from "../styles"

const Home = () => {
    return (
    <div> 
        <Title>BookBerries</Title>
        <Description>A store that helps you to find a good friend‟BOOK”.</Description>
        <ShopImage alt="store" src="https://images.unsplash.com/photo-1551040921-22a8552acb0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
    </div>    
    );
};

export default Home;