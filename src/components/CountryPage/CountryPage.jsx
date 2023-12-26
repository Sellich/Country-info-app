import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PublicIcon from '@mui/icons-material/Public';
import { useDispatch, useSelector } from "react-redux";
import { selectCountry } from "../../redux/selectCountries";
import { getCountry } from "../../redux/countryPageReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CountryPage = () => {
  let country = useSelector(selectCountry)
  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!country) {
      dispatch(getCountry(params.country))
    }
  }, [country, dispatch]);

  const Img = styled('img')({
    maxWidth: '400px',
    maxHeight: '100%',
    lg: { width: '200px' }
  });

  return (
    <Paper>
      {country ? <Grid container >
        <Grid item lg={4} md={12}>
          <Img alt={`flag ${country.name.official}`} src={country.flags.svg} />
        </Grid>
        <Grid item lg={8} md={12} sx={{ flex: 1 }}>
          <Typography component="div" sx={{ textAlign: 'center', fontWeight: 600, fontSize: "22px" }} variant="h6" mt={1}>
            {country ? country.name.official : 'downloading'}
          </Typography>
          <Grid item>
            <List sx={{ ml: 2 }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiPeopleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Population" secondary={country.population} />
              </ListItem>
              <Divider component="li" variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PublicIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Continents" secondary={country.continents} />
              </ListItem>
              <Divider component="li" variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={country.coatOfArms.svg} alt=" Coat of Arms" />
                </ListItemAvatar>
                <ListItemText primary="Coat Of Arms" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid> : 'DOWNLOADING'}
    </Paper>
  )
}

export default CountryPage;
