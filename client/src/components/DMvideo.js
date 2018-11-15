import React from 'react';
import { Player } from 'video-react';




const DMvideo = (props) => {
  return (
    <Player
      playsInline
      src="./resources/dmvideo.mp4"
    />
  );
};

export default DMvideo