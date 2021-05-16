import React from 'react';
import renderer from 'react-test-renderer';
import LibraryScreen from '../src/screens/LibraryScreen';

test('Library Screen', () => {
  const tree = renderer.create(<LibraryScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});