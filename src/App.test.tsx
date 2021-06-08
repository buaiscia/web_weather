import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import Form from './app/components/Form/Form';

test('Render input form', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Form />
    </Provider>

  )
  const elements = getAllByText('Select');
  elements.forEach((element) => {
    expect(element.textContent).toBe('Select')
  })

})

