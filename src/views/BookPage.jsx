// This component is a single page view for a book

import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import BookCard from './BookCard';
import { getBooksData } from '../action';

const mapStateToProps = state => {
  return { books: state.books };
};

const BookPage = ({ dispatch, books, match }) => {
  useEffect(() => {
    dispatch(getBooksData())
  }, [dispatch])

  const bookDetails = books.find(book => book.book_id == match.params.id);

  return (
    <Container >
      <BookCard {...bookDetails} />
    </Container>
  )
}

export default connect(mapStateToProps)(BookPage);
