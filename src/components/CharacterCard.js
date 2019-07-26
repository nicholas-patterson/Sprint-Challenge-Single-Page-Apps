import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginBottom: 20
  }
});

export default function CharacterCard({ character }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Character Image"
          height="300"
          image={character.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {character.name}
          </Typography>
          <Typography>
            {character.species} {character.status}
          </Typography>
          <Typography>Location: {character.location.name}</Typography>
          <Typography>Origin: {character.origin.name}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Episodes
        </Button>
      </CardActions>
    </Card>

    // <div>
    //   <img src={character.image} alt={character.name} />
    //   <h3>{character.name}</h3>
    //   <p>
    //     {character.species} {character.status}
    //   </p>
    //   <h5>Locatation: {character.location.name}</h5>
    //   <h5>Origin: {character.origin.name}</h5>
    // </div>
  );
}

// Almost Fininshed
