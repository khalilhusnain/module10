const { createSVG } = require('./shapes');

test('Generate SVG for circle shape', () => {
  const svg = createSVG('A', 'black', 'circle', 'red');
  expect(svg).toContain('<circle');
  expect(svg).toContain('cx="150"');
  expect(svg).toContain('cy="100"');
  expect(svg).toContain('r="90"');
  expect(svg).toContain('fill="red"');
  expect(svg).toContain('font-size="70"');
  expect(svg).toContain('fill="black"');
  expect(svg).toContain('A');
});

test('Generate SVG for triangle shape', () => {
  const svg = createSVG('B', 'blue', 'triangle', 'green');
  expect(svg).toContain('<polygon');
//   expect(svg).toContain('points="50,18 244,182 56,182"');
  expect(svg).toContain('fill="green"');
  expect(svg).toContain('font-size="45"');
  expect(svg).toContain('fill="blue"');
  expect(svg).toContain('B');
});

test('Generate SVG for square shape', () => {
  const svg = createSVG('C', 'green', 'square', 'blue');
  expect(svg).toContain('<rect');
  expect(svg).toContain('width="200"');
  expect(svg).toContain('height="200"');
  expect(svg).toContain('fill="blue"');
  expect(svg).toContain('font-size="70"');
  expect(svg).toContain('fill="green"');
  expect(svg).toContain('C');
});
