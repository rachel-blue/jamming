import React from 'react';
import TrackList from '../TrackList/TrackList';
import './PlayList.css';

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
    // test later. atm it's breaking when edited. (not good)
    event.preventDefault();
  };

  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={'New Playlist'}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
