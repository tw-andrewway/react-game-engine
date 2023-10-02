import Frame from './Frame/Frame'


  function createData(frame: Frame): Uint8ClampedArray {
    const pixelSet = this.frame.getFrameData();
    const width = pixelSet.length;
    const height = pixelSet[0].length;
    const data = new Uint8ClampedArray(width * height * 4);
    let index = 0;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const pixel = pixelSet[i][j];
        data[index++] = pixel.getStandard();
        data[index++] = pixel.getRed();
        data[index++] = pixel.getGreen();
        data[index++] = pixel.getBlue();
      }
    }

    return data;
  }

export default createData;