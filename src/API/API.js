import axios from "axios";

const instance = axios.create({
   baseURL: 'https://restcountries.com/v3.1/'
});


export const countryAPI = {
   allCountry() {
      return instance.get(`all`)
   },
   byNameCountry(name) {
      return instance.get(`/name/${name}`)
   },
   byContinent(continent) {
      return instance.get(`/region/${continent}`)
   }
}