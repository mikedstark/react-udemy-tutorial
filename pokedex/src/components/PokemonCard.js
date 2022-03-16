import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    "&:hover":{
      backgroundColor:'grey',
    }
  },
  cardMedia: {
    margin: "auto",
    height: 130,
    width: 130,
  },
  cardContent: {
    textAlign: "center",
  }
}))

export default function PokemonCard(props) {
  const classes = useStyles()

  const { pokemon, image } = props;
  const {id, name} = pokemon;
  return (
    <Grid item xs={12} sm={2}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image}></CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  )
}