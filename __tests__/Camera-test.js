import React from 'react';
import renderer from 'react-test-renderer';
import Camera from '../src/screens/components/Camera';

test('Camera Screen', () => {
  const tree = renderer.create(<Camera/>).toJSON();
  expect(tree).toMatchSnapshot();
});