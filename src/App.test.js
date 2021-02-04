import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Basic App test', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    ReactDOM.render(<App />, container);
  });

  it('Renders without crashing', () => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('Has header tag', () => {
    const ele = container.querySelector('section');
    expect(ele).not.toBe(null);
  });
});
