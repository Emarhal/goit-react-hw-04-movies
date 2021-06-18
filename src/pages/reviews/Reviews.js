import React, { Component } from "react";
import axios from "axios";
import searchApi from "../../services/api";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    // const KEY = "c07e91d5d5c572c0bf5dabe0ae7a4fc6";
    // const BASE_URL = "https://api.themoviedb.org/3";
    const { movieId } = this.props.match.params;
    const chageWord = "reviews";
    // console.log(movieId);
    // const response = await axios.get(
    //   `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
    // );
    // console.log(response.data.results);

    const response = await searchApi.getCastReviewApi(movieId, chageWord);
    console.log(response);

    this.setState({ reviews: response.results });
  }

  render() {
    return (
      <>
        <h2>Reviews</h2>
        <ul>
          {this.state.reviews.map((review) => (
            <>
              <li key={review.id}>{`Autor: ${review.author}`}</li>
              <p>{review.content}</p>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
