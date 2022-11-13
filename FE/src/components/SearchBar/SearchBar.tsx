import {SecondaryButton} from 'pages/Login/Login.styles';
import React, {useState} from 'react';
import {SearchBarContainer, SearchInput} from "./SearchBar.styles";

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleOnSearch = () => {
        console.log(search)
    }

    return (
        <SearchBarContainer>
            <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"search user by first name"}
            />
            <SecondaryButton onClick={handleOnSearch}>Search</SecondaryButton>
        </SearchBarContainer>
    );
};

export default SearchBar;