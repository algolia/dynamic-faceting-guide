import React from 'react';
import ReactDOM from 'react-dom';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Panel,
} from 'react-instantsearch-dom';
import DynamicFacets from './DynamicFacets';

const appId = process.env.REACT_APP_ALGOLIA_APP_ID;
const indexName = process.env.REACT_APP_ALGOLIA_INDEX_NAME;
const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY;

const App = () => (
  <InstantSearch appId={appId} apiKey={apiKey} indexName={indexName}>
    <SearchBox />
    <div className="twoCol">
      <div>
        <DynamicFacets>
          {({ facets }) =>
            facets.map(({ attribute, Widget }) => (
              <Panel header={attribute} key={attribute}>
                <Widget attribute={attribute} key={attribute} />
              </Panel>
            ))
          }
        </DynamicFacets>
      </div>
      <Hits />
    </div>
    <div style={{ textAlign: 'center' }}>
      <Pagination />
    </div>
  </InstantSearch>
);

ReactDOM.render(<App />, document.getElementById('root'));
