import React, { useState } from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo() {
  const [selectedProject] = useState({
    video: 'YYhqjUaRLzo', // Substitua pelo ID do vídeo desejado
  });

  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      volume: 0.1,
    },
  };

  const videoId = selectedProject.video;

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default YouTubeVideo;
