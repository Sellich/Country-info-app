import { createSlice } from "@reduxjs/toolkit"
import { countryAPI } from "../API/API"

const countriesState = {
   countries: []
}

const countriesSlice = createSlice({
   name: 'countries',
   initialState: countriesState,
   reducers: {
      setCountrys(state, action) {
         state.countries = action.payload
      }
   }
})

export const getAllCountries = () => async (dispatch) => {
   let response = await countryAPI.allCountry()

   dispatch(setCountrys(response.data))
}

export const { setCountrys } = countriesSlice.actions
export default countriesSlice.reducer