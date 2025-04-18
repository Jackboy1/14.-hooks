import React, { useState } from 'react';

// Filter component allows users to filter movies by title and rating
const Filter = ({ onFilter }) => {
  // State to hold filter criteria
  const [filter, setFilter] = useState({ title: '', rating: 0 });

  // Update filter state when title input changes
  const handleTitleChange = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };

  // Update filter state when rating input changes
  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: parseInt(e.target.value) });
  };

  // Call onFilter prop with current filter state when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filter);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Title input field */}
      <label className="flex flex-col text-neutral-200">
        <span className="text-lg font-medium">Title:</span>
        <input
          type="text"
          value={filter.title}
          onChange={handleTitleChange}
          className="mt-1 p-2 border-gray-300 border rounded-md text-neutral-200"
        />
      </label>
      {/* Rating input field */}
      <label className="flex flex-col text-neutral-200">
        <span className="text-lg font-medium">Rating:</span>
        <input
          type="number"
          value={filter.rating}
          onChange={handleRatingChange}
          className="mt-1 p-2 border-gray-300 border rounded-md text-neutral-200"
        />
      </label>
      {/* Submit button */}
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Filter
      </button>
    </form>
  );
};

export default Filter;

