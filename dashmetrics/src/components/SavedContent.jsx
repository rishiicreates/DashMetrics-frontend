import React, { useState } from 'react';

const SavedContent = () => {
  const [search, setSearch] = useState('');
  const [content, setContent] = useState([]);

  const handleSearch = () => {
    // Fetch saved content based on search query
    fetch(`/api/saved?search=${search}`)
      .then((res) => res.json())
      .then((data) => setContent(data));
  };

  return (
    <div className="saved-content">
      <h1>Saved Content</h1>
      <input
        type="text"
        placeholder="Search saved content..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {content.map((item) => (
          <li key={item._id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedContent;