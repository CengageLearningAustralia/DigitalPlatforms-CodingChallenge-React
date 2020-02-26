import React from 'react';
import BookSimple from './bookSimple';

class BookList extends React.Component {

  
  render() {
    const listItems = this.props.books.map((book) =>
      <BookSimple
        name={book.name}
        // Replace lorempixel which is currently broken with picsum ( +20 to get past all the laptop pics :)
        cover={`https://picsum.photos/id/${book.book_id + 20}/200`}
        author={book.author}
        key={book.book_id} />

    );

    return (
      <div>{listItems}</div>
    );
  }

}

export default BookList;