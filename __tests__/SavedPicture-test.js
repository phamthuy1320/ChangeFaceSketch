import React from 'react';
import renderer from 'react-test-renderer';
import SavedPicture from '../src/screens/SavedPicture';

test('Picture Saved', () => {
  const tree = renderer.create(<SavedPicture/>).toJSON();
  expect(tree).toMatchSnapshot();
});