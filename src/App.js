import React, { useState, useEffect } from 'react';
import { generateRandomId } from './utils';
import useCharacter from './useCharacter';
import Character from './Character';
import './style.css';

export default function App() {
  // This state tracks changes in the search bar
  const [searchText, setSearchText] = useState('');
  const { data, error, isLoading, id, setId } = useCharacter();

  console.log(isLoading);
  return (
    <div className="container">
      <h1>Search data</h1>
      <input
        className="search-bar"
        placeholder="Search by Id e.g. 1"
        // onChange is an event which fires whenever you type something in the input (search bar)
        onChange={function (event) {
          // that event also has the text that is currently in search bar which is accessed through event.target.value
          // We use that property to update the searchText State
          setSearchText(event.target.value);
        }}
      />
      <div>
        <button
          className="btn"
          onClick={() => setId(searchText)}
          disabled={isLoading}
        >
          Search
        </button>
        <button
          className="btn"
          onClick={() => setId(generateRandomId())}
          disabled={isLoading}
        >
          Random
        </button>
      </div>
      {/* Display Loader when isLoading is true */}
      {isLoading ? <div className="loader">Loading...</div> : null}
      {/* Display Error when there is an error */}
      {!isLoading && error ? <p className="error">{error}</p> : null}
      {/* Display Image if data.sprite is not undefined and isLoading is false */}
      {!isLoading && data?.image ? <Character data={data} /> : null}
    </div>
  );
}
