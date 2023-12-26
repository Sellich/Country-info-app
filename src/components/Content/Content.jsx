import { Grid } from "@mui/material";
import Country from "./Card/Country";

const Content = ({ countries, value }) => {
  const items = countries
    .filter((c) => c.name.official.toLowerCase()
      .includes(value.toLowerCase()) || value === '').map((item) =>
        <Country key={item.name.official} name={item.name.official} flag={item.flags.svg} population={item.population} />);

  return (
    <div>
      <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {items}
      </Grid>
    </div>
  )
}

export default Content;
