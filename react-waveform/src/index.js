import 'babel-polyfill';
import React, { useRef } from 'react';
import { render } from 'react-dom';
import { getAudioBuffer, getContext, drawWaveform } from './utils';

export function App() {
  const canvasRef = useRef();

  return <div>
    <input
      accept='audio/*'
      type='file'
      name='file'
      id='file'
      onChange={event => {
        const files = event.target.files;
        const context = getContext();
        context.resume().then(() => {
          const filePath = window.URL.createObjectURL(files[0]);
          getAudioBuffer(filePath, context).then(buffer =>
            drawWaveform(buffer, canvasRef.current, 300, 800)
          );
        });
      }}
    />
    <canvas
      ref={canvasRef}
      style={{
        height: '300px',
        width: '800px'
      }}
    />
  </div>;
}

const appElement = document.getElementById('root');

render(<App />, appElement);
