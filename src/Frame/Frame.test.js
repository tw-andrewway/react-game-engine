import Frame from './Frame';

test('can create blank frame', () => {
    const frame = new Frame(100,100);
    expect(frame.getFrameData().length).toBe(100);
  });

test('can create frame with data', () => {  
  const frame = new Frame(100,200);
  let frameData = frame.getFrameData();
  expect(frameData[0][0]).toBeDefined();
})