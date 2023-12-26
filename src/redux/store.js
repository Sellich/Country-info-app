import { configureStore } from "@reduxjs/toolkit";
import ContinentsReducer from "./ContinentsReducer";
import countryPageReducer from "./countryPageReducer";
import countryReducer from "./countryReducer";
import searchReducer from "./searchReducer";
import themeReducer from "./themeReducer";

const store = configureStore({
  reducer: {
    countries: countryReducer,
    countryPage: countryPageReducer,
    search: searchReducer,
    continents: ContinentsReducer,
    theme: themeReducer,
  }
});

export default store;