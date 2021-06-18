import React, { Component } from "react";
import axios from "axios";
import searchApi from "../../services/api";

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    // const KEY = "c07e91d5d5c572c0bf5dabe0ae7a4fc6";
    // const BASE_URL = "https://api.themoviedb.org/3";
    const { movieId } = this.props.match.params;
    const chageWord = "credits";
    // console.log(movieId);
    // const response = await axios.get(
    //   `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
    // );
    // console.log(response.data.cast);
    const response = await searchApi.getCastReviewApi(movieId, chageWord);

    this.setState({ actors: response.cast });
  }

  render() {
    return (
      <>
        <h2>Cast actors</h2>
        <ul>
          {this.state.actors.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              {actor.name}
              <p>
                {`Character:
                ${actor.character}`}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
