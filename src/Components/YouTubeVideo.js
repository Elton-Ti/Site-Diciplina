import React from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo({ videoId }) {
  const opts = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
      controls: 1,
      showinfo: 0,
      volume: 0.1,
    },
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Define a altura da div para preencher toda a modal
  };

  return (
    <div style={containerStyle}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default YouTubeVideo;
