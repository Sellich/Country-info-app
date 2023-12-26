import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContinent } from "../../redux/ContinentsReducer";
import { selectContinents } from "../../redux/selectCountries";

const ContinentsMenu = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const continents = useSelector(selectContinents);
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(getContinent(e.target.value));
  };

  return (
    <FormControl component="form" data-testid="form" variant="filled"
      sx={{
        width: { lg: '200px', md: 150, sm: 50, xs: 50 },
        ml: { lg: '20px', md: '10px', sm: '5px', xs: '4px' },
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
      <InputLabel data-testid="label" component="label" htmlFor="continent" sx={{ color: 'white' }}> Continents </InputLabel>
      <Select data-testid="select" name="continent" inputId="continent" onChange={handleChange} value={value} defaultValue="All" sx={{ width: '100%' }}>
        {continents.map((c) => <MenuItem value={c} key={c}> {c} </MenuItem>)}
      </Select>
    </FormControl>

  )
}

export default ContinentsMenu;
