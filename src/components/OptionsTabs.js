import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FilesTab from './FilesTab';
import FilesErrorsTab from './FilesErrorsTab';

function OptionsTabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={true}
      id="options-tabs"
      className="mb-3"
    >
      <Tab eventKey="home" title="Files">
        <FilesTab />
      </Tab>
      <Tab eventKey="errors" title="Errors Report">
        <FilesErrorsTab />
      </Tab>
    </Tabs>
  );
}

export default OptionsTabs;