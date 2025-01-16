import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ResultModal from './ResultModal';
import { getAsyncSingleFileData } from '../store/slice/singleFileDataSlice/thunk';

const SearchFileByName = ({ onSearchResult }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.singleFileData);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(getAsyncSingleFileData(query)).then((action) => {
        if (action && action.payload) {
          onSearchResult(action.payload);
        }
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary me-2" onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>

        {data && (
            <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#resultModal"
                disabled={!onSearchResult}
            >
            View Results
            </button>
        )}
      </div>

      <ResultModal data={data} />
    </div>
  );
};

export default SearchFileByName;
