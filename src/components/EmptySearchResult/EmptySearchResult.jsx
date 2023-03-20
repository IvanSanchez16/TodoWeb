import React from "react";


function EmptySearchResult({ searchText }) {
    return (
        <p>No se encontraron TODOs con {searchText}</p>
    );
}

export { EmptySearchResult };