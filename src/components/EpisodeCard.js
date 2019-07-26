import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    marginBottom: 20,
    boxSizing: "border-box"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 18
  },
  pos: {
    marginBottom: 12
  }
});

const EpisodeCard = ({ episode }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {episode.name}
        </Typography>
        <Typography>Season: {episode.episode}</Typography>
        <Typography>Air Date: {episode.air_date}</Typography>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
