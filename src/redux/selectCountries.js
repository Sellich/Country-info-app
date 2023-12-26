export const selectCountries = (state) => {
  return state.countries.countries;
}

export const selectCountry = (state) => {
  return state.countryPage.country;
}

export const selectValue = (state) => {
  return state.search.value;
}

export const selectContinent = (state) => {
  return state.continents.continent;
}

export const selectContinents = (state) => {
  return state.continents.continents;
}

export const selectTheme = (state) => {
  return state.theme.darkTheme;
}
