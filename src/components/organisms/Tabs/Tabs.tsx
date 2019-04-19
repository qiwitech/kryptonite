import React from 'react';
import { TabPanel, Tabs as ReactTabs } from 'react-tabs';
import { TabList } from './../../atoms';

export function Tabs({ tabs, panels }) {
  return (
    <ReactTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <TabList>
        {tabs}
      </TabList>
      {panels.map(panelsMap)}
    </ReactTabs>
  );
}

function panelsMap(panel: JSX.Element) {
  return (
    <TabPanel key={panel.key!}>
      {panel}
    </TabPanel>
  );
}
