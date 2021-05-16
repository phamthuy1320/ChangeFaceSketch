import React from 'react';
import renderer from 'react-test-renderer';
import EditSketch from '../src/screens/EditSketch';

test('Edit Sketch Screen', () => {
  const tree = renderer.create(<EditSketch/>).toJSON();
  expect(tree).toMatchSnapshot();
});