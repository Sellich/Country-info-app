import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountry } from "../../../redux/countryPageReducer";

const Country = ({ name, flag }) => {
  const dispatch = useDispatch();

  return (
    <Grid item lg={4} xs={12} md={6} sm={6} >
      <Card variant="outlined" sx={{ maxWidth: '500px' }}>
        <CardMedia component="img"
          image={flag}
          alt={`flag ${name}`}
          style={{
            height: 200,
            width: '100%',
          }} />
        <CardContent>
          <Link to={`${name}`} style={{ textDecoration: 'none' }} >
            <Typography onClick={() => dispatch(getCountry(name))} color="inherit">
              {name}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Country;
