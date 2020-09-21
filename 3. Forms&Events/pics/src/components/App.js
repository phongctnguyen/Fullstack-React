import React from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  handleSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    const { data } = response;
    this.setState({
      images: data.results,
    });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
