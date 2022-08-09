import analyze from 'rgbaster';

export default async function getAverageRGB(imgEl: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  context.drawImage(imgEl, 0, 0);
  const pngUrl = canvas.toDataURL();
  return analyze(pngUrl, {paletteSize: 20, ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']}).then((data) => data[0].color);
}
