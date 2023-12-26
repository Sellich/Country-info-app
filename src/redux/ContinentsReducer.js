import { createSlice } from "@reduxjs/toolkit";
import { countryAPI } from "../API/API";
import { getAllCountries, setCountrys } from "./countryReducer";

const continentsState = {
  continent: {},
  continents: ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"]
};

const continentsSlice = createSlice({
  name: "continents",
  initialState: continentsState,
  reducers: {
    setContinents(state, action) {
      state.continent = action.payload
    }
  }
});

export const getContinent = (continent) => async (dispatch) => {
  if (continent === "All") {
    dispatch(getAllCountries());
  }

  let response = await countryAPI.byContinent(continent);

  dispatch(setCountrys(response.data));
}

export const { setContinents } = continentsSlice.actions;

export default continentsSlice.reducer;
