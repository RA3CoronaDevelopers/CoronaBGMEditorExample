export async function getAudioBuffer(path, context) {
  const response = await fetch(path);
  const audioData = await response.arrayBuffer();
  return new Promise(resolve =>
    context.decodeAudioData(audioData, buffer => resolve(buffer))
  );
};

export function getContext() {
  window.AudioContext =
    window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext;
  const context = new AudioContext();
  return context;
};

export function drawWaveform(buffer, canvas, height, width) {
  const wave = buffer.getChannelData(0);
  const step = Math.ceil(wave.length / width);
  let bounds = [];
  for (let i = 0; i < width; ++i) {
    // get the max and min values at this step
    bounds = [...bounds, wave.slice(i * step, i * step + step).reduce(
      (total, v) => ({
        max: v > total.max ? v : total.max,
        min: v < total.min ? v : total.min
      }),
      { max: -1.0, min: 1.0 }
    )];
  }

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const canvasSize = {
    height: (canvas.height = height),
    width: (canvas.width = width)
  };
  ctx.fillStyle = '#eee';
  ctx.strokeStyle = '#666';
  const maxAmp = canvasSize.height / 2;
  ctx.moveTo(0, maxAmp);
  bounds.forEach((bound, i) => {
    const x = i * 1;
    const y = (1 + bound.min) * maxAmp;
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + Math.max(1, (bound.max - bound.min) * maxAmp));
  });
  ctx.stroke();
};
