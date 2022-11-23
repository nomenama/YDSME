import {SecondaryButton} from 'pages/Login/Login.styles';
import React, {useState} from 'react';
import {SearchBarContainer, SearchInput} from "./SearchBar.styles";

const SearchBar = ({handleOnSearch}: { handleOnSearch: any }) => {
    const [search, setSearch] = useState("");

    return (
        <SearchBarContainer>
            <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"search user by first name"}
                onKeyDown={(event) => event.key === "Enter" && handleOnSearch(search)}
            />
            <SecondaryButton onClick={() => {
                handleOnSearch(search);
                setSearch("");
            }}>Search</SecondaryButton>
        </SearchBarContainer>
    );
};

export default SearchBar;