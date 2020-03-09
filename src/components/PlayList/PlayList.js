import React from 'react';
import TrackList from '../TrackList/TrackList';
import './PlayList.css';

function PlayList() {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList tracks={[]} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default PlayList;
