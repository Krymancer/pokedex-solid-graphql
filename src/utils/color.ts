import quantize from 'quantize';

/**
 *
 * @param {HTMLImageElement} imgEl Image element to get the color from
 * @return {int[]} an array of the RGB values of the image
 */
export default function getAverageRGB(imgEl: HTMLImageElement) : [r: number, g: number, b: number] {
  const blockSize = 5;
  const quality = 16;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');

  const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  const data = context.getImageData(0, 0, width, height);
  const pixelCount = width * height;
  const pixelArray = createPixelArray(data.data, pixelCount, blockSize);
  const colorMap = quantize(pixelArray, quality);
  const palette = colorMap? colorMap.palette() : null;
  /**
   * Here we need to get the "second" dominant color
   * because the image is mostly transparent so the frist
   * dominant color is usually black (because we are not using aplha channel)
   */
  const dominantColor = palette? palette[1] : null;
  return dominantColor;
}

export function rgbToHex(r: number, g: number, b: number) {
  if (r > 255 || g > 255 || b > 255) {
    throw new Error('Invalid color component');
  }
  return ((r << 16) | (g << 8) | b).toString(16);
}

function createPixelArray(imgData, pixelCount, quality) {
  const pixels = imgData;
  const pixelArray = [];

  for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
    offset = i * 4;
    r = pixels[offset + 0];
    g = pixels[offset + 1];
    b = pixels[offset + 2];
    a = pixels[offset + 3];

    // If pixel is mostly opaque and not white
    if (typeof a === 'undefined' || a >= 125) {
      if (!(r > 250 && g > 250 && b > 250)) {
        pixelArray.push([r, g, b]);
      }
    }
  }
  return pixelArray;
}

