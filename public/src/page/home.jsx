import React, { useState, useEffect } from "react";
import {Player} from '../player/player';
const playerOptions = {
  muted: false,
  handleNoteClick: () => {
    alert('yeah!')
  }
};
export const Home = () => {
  const [player, setPlayer] = useState(null);
  const video = 'https://d2v9dumx2qgiuf.cloudfront.net/de1fd958-682c-407c-9e35-e26e00ffff98/dash/NDARBOY GENK - BALUNGAN KERE (Official Music Video) Eps 1.mpd';
  useEffect(() => {
    if (player) {
      player.src({
        src: video,
        type: 'application/dash+xml',
      });
    }
  }, [video, player]);

  return (
    <div className="dynamic">
      <h1>Dynamic Video </h1>
      <Player
      playerOptions={playerOptions}
      onPlayerInit={setPlayer}
      onPlayerDispose={setPlayer}
      />
    </div>
  )
}
