import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import styles from "./HomePage.module.css";
import searchApi from "../../services/api";

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    // const KEY = "c07e91d5d5c572c0bf5dabe0ae7a4fc6";
    // const BASE_URL = "https://api.themoviedb.org/3";
    // const response = await axios.get(
    //   `${BASE_URL}/trending/movie/week?api_key=${KEY}`
    // );
    // console.log(response.data);
    const response = await searchApi.getTrendingApi();
    console.log(response);

    this.setState({ films: response });
  }

  render() {
    // console.log(this.props.match.url);
    const { films } = this.state;
    return (
      <>
        <h2>HomePage</h2>
        <ul className={styles.list}>
          {films.map((film) => (
            <li key={film.id} className={styles.item}>
              <Link to={`/movies/${film.id}`}>
                {/* {film.title} */}
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
