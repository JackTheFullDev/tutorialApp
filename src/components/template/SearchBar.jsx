import { AiOutlineSearch } from "react-icons/ai";
export const SearchBar = ({handleHomeInput}) =>

{
    return(
        <div className="searchBar">
          <input
            className="searchbar-input"
            placeholder="search"
            onChange={handleHomeInput}
          />
          <AiOutlineSearch id="search-icon" />
        </div>
    )
}