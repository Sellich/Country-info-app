
import { ThemeProvider } from '@emotion/react';
import { Container, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import CountryPage from './components/CountryPage/CountryPage';
import Header from './components/Header/Header';
import { getAllCountries } from './redux/countryReducer';
import { selectCountries, selectTheme, selectValue } from './redux/selectCountries';

function App() {
   const dispatch = useDispatch()
   const countries = useSelector(selectCountries);
   const value = useSelector(selectValue)
   const themeMode = useSelector(selectTheme)
   useEffect(() => {
      dispatch(getAllCountries())
   }, [])

   const theme = createTheme({
      palette: {
         mode: themeMode ? "dark" : "light",
      }
   })
   return (
      <div>
         <ThemeProvider theme={theme}>
            <Paper>
               <Header value={value} />
               <Container maxWidth='lg' sx={{ mt: 10 }}>
                  <Routes>
                     <Route path="/" element={<Content countries={countries} value={value} />} />
                     <Route path=":country" element={<CountryPage />} />
                  </Routes>
               </Container>
            </Paper>
         </ThemeProvider>
      </div >
   );
}

export default App;
