import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { kbUserBoxes } from './Storage/Redux/Redux';

export const storage = configureStore({
  reducer: {
    kbUserBoxes: kbUserBoxes.reducer
  }
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={storage}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)