import React from 'react';

class BookDetailed extends React.Component {
    render() {
      const book = this.props.book;    
      return (
        <tr>
          <td>
            <img src={book.cover}  />
          </td>
          <td>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
            <div>{book.published_at}</div>
            <div>{book.isbn}</div>
          </td>
        </tr>
      );
    }
  }