/* Styles */
import { SearchBarStyle } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyle
      placeholder="Search by book name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
