import React from 'react';
import { useSelector } from 'react-redux';

const ResultModal = () => {
    const { data, isLoading, error } = useSelector((state) => state.singleFileData);
    return (
        <div
        className="modal fade"
        id="resultModal"
        tabIndex="-1"
        aria-labelledby="resultModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="resultModalLabel">Search Result</h5>
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
            <div className="modal-body">
                {isLoading && <p>Cargando...</p>}
                {error && <p className="text-danger">Error: {error}</p>}
                {!isLoading && !error && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
                </button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ResultModal;
