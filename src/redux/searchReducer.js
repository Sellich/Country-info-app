import { createSlice } from "@reduxjs/toolkit"

const searchState = {
   value: '',
}

const searchSlice = createSlice({
   name: "search",
   initialState: searchState,
   reducers: {
      setValue(state, action) {
         state.value = action.payload
      }
   }
})

export const { setValue } = searchSlice.actions;
export default searchSlice.reducer;