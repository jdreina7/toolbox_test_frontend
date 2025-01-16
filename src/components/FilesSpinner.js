import Spinner from 'react-bootstrap/Spinner';

function FilesSpinner() {
  return (
    <div className="files-spinner">
      <Spinner animation="grow" size="lg" />
      <h2 className="mt-4">Loading</h2>
    </div>
  );
}

export default FilesSpinner;