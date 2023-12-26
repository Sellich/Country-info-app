import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import countryReducer from './redux/countryReducer';
import countryPageReducer from './redux/countryPageReducer';
import searchReducer from './redux/searchReducer';
import ContinentsReducer from './redux/ContinentsReducer';
import themeReducer from './redux/themeReducer';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        countries: countryReducer,
        countryPage: countryPageReducer,
        search: searchReducer,
        continents: ContinentsReducer,
        theme: themeReducer,
      }, preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';

export { render };
