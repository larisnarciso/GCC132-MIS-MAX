import React, { useState } from 'react';
import './SearchBar.css';

interface Props {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="O que você está procurando?"
          className="search-input"
        />
      </form>
    </div>
  );
};

export default SearchBar;