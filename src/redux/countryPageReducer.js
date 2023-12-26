import { createSlice } from "@reduxjs/toolkit";
import { countryAPI } from "../API/API";

const countryPageState = {
  country: null,
};

const countryPageSlice = createSlice({
  name: "countryPage",
  initialState: countryPageState,
  reducers: {
    setCountry(state, action) {
      state.country = action.payload
    }
  }
});

export const getCountry = (name) => async (dispatch) => {
  let response = await countryAPI.byNameCountry(name);

  dispatch(setCountry(response.data[0]));
}

export const { setCountry } = countryPageSlice.actions;

export default countryPageSlice.reducer;
