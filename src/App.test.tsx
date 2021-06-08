import React from 'react';
import renderer from 'react-test-renderer';

import Form from './app/components/Form/Form';

test('Render input form', () => {
  const component = renderer.create(
    <Form />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
