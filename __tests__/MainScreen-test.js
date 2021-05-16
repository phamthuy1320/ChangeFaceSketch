import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../src/screens/MainScreen';

test('Main Screen', () => {
  const tree = renderer.create(<MainScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});