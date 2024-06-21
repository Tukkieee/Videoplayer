import './app.css'
import React from 'react';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import HlsPlayer from 'xgplayer-hls.js';



export function App() {

  window.onload = function() {
    const player = new Player({
      id: 'mse',
      url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
      
 
    });

    player.registerPlugin(HlsPlayer);
  
  };

 



  

  return (
    <>
      <div id="mse" style={{ width: '600px', height: '400px' }}></div>
      
    </>
  )
}





