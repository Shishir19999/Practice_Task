import React, { useState } from 'react';

const SearchFilterComponent = () => {
  const fruit = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Guava',
    'Pear'
  ];

  const [searchData, setSearchData] = useState('');

  const inputData = (e) => {
    setSearchData(e.target.value);
  };

  const filteredData = fruit.filter((fruits) =>
    fruits.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchData}
        onChange={inputData}
      />

      <ol>
        {filteredData.map((fruit,index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ol>
    </div>
  );
};

export default SearchFilterComponent;

