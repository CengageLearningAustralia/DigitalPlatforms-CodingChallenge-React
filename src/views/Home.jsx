import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../components/bookList';
import axios from "axios";

const HomeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
      .then(response => {
        const books = response.data;
        this.setState({ books });
      })
  }

  render() {
    const match = this.props.match;
    return (
      <div style={HomeStyle}>
        <div>
          <BookList books={this.state.books} />
        </div>
        {match.params.testRouting && <p>{match.params.testRouting}</p>}
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      testRouting: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Home;
