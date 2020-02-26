import React from 'react';
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { Card } from "shards-react";

class BookSimple extends React.Component {
  render() {
    const { name, author, cover, isLoading } = this.props;

    const userDetails = (
      <span>
        <img
          className="img-thumbnail mx-auto mb-2 shadow-sm"
          src={cover}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <h4 className="mb-0">{name}</h4>
        <span className="text-muted">{author}</span>
      </span>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <Card
        className="mx-auto mt-4 text-center p-5"
        style={{ maxWidth: "600px", maxHeight: "250px" }}
      >
        {isLoading ? loadingMessage : userDetails}
      </Card>
    );
  }
}

BookSimple.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string,
  isLoading: PropTypes.bool
};

export default BookSimple;