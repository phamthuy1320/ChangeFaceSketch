import React from 'react';
import renderer from 'react-test-renderer';
import EditImage from '../src/screens/EditImage';

test('Edit Image Screen', () => {
  const tree = renderer.create(<EditImage/>).toJSON();
  expect(tree).toMatchSnapshot();
});