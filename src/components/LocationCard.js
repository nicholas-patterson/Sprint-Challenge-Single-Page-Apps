import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 150,
    marginBottom: 20,
    boxSizing: "border-box"
  },
  title: {
    fontSize: 18
  },
  pos: {
    marginBottom: 12
  }
});

export default function LocationCard({ places }) {
  const classes = useStyles();
  const residents = places.residents.map(resident => {
    return <p>{resident}</p>;
  });
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Location: {places.name}
        </Typography>
        <Typography>Dimension: {places.dimension}</Typography>
        <Typography>Residents: {residents.length}</Typography>
      </CardContent>
    </Card>

    // <div>
    //   <h3>{places.name}</h3>
    //   <p>{places.dimension}</p>
    //   <p>Residents: {residents.length}</p>
    // </div>
  );
}
