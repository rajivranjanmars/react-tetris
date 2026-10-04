import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { expect, it } from 'vitest';
import App from './App';

it('renders the game and start button', async () => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);
  await act(async () => root.render(<App />));
  expect(div.textContent).toContain('Start Game');
  await act(async () => root.unmount());
  div.remove();
});
