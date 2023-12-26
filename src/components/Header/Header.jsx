import { AppBar, Button, Container, FormControlLabel, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FlagIcon from '@mui/icons-material/Flag';
import { Link } from "react-router-dom";
import c from "./Header.module.scss";
import SearchInput from "./SearchInput";
import ContinentsMenu from "./ContinentsMenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/themeReducer";

const Header = ({ value }) => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (mode) => {
    setDarkMode(mode);
    dispatch(setTheme(mode));
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box>
      <AppBar>
        <Container maxWidth='lg' >
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', md: 'none' }}>
              <IconButton>
                <FlagIcon />
              </IconButton>
              <Link to="/" className={c.link} style={{ alignItems: 'center', display: 'flex' }}>
                <Typography variant="h6" underline="none" >
                  Country Info
                </Typography>
              </Link>
              <SearchInput value={value} />
              <ContinentsMenu />
            </Box>
            <FormControlLabel label="Dark Mode" control={<Switch {...label} checked={darkMode} color="primary" onClick={() => handleClick(!darkMode)} />} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
};

export default Header;
