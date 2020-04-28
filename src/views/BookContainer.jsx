//This is the container to render the list of books

import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BookCard from './BookCard';
import { getBooksData } from '../action';

const mapStateToProps = state => {
  return { books: state.books };
};

const BookContainer = ({ dispatch, books }) => {
  useEffect(() => {
    dispatch(getBooksData())
  }, [dispatch])

  return (
    <Container >
      <Grid container justify="center" spacing={3}>
        {books.map(book => (
        <Grid key={book.book_id} item>
          <BookCard {...book} />
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default connect(mapStateToProps)(BookContainer);
