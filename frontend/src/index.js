import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { kbUserBoxes, navTabs } from './Storage/Redux/Redux';

// const express = require('express')

// const server = express()

// server.use(express.json())

// server.use('/', (req, res) => {
//     console.log('You did it!')
//     res.json({message: 'Welcome to Land of Gaming!'})
// })

export const storage = configureStore({
  reducer: {
    kbUserBoxes: kbUserBoxes.reducer,
    navTabs: navTabs.reducer,
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