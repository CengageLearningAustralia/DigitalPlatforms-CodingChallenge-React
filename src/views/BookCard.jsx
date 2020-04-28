//This is a Book Card used to render a single book item

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: {
      color: '#fff',
      textDecoration: 'none',
  }
});

const BookCard = (props) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <img
            src={props.cover}
            alt={props.name}
            height="200"
            width="300"
        />
        <Typography variant="h5" component="h2">
            {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Author: {props.author}
        </Typography>
        <Typography variant="body2" component="p">
            Publish Date: {props.published_at}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            ISBN: {props.isbn}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary"><Link className={classes.link} to={`/books/${props.book_id}`}>Learn More</Link></Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
