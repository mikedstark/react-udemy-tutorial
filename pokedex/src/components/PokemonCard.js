import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

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
  },

  link: {
    textDecoration: "none"
  }
}))

export default function PokemonCard(props) {
  const classes = useStyles()

  const { pokemon } = props;
  const {id, name, image} = pokemon;
  return (
    <Grid item xs={12} sm={2}>
      <Link to={"/pokemon/" + id} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={image}></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>

  )
}