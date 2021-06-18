import React, { Component, Suspense } from "react";
import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import { movieDetailsPageRoutes } from "../../routes/movieDetailsPageRoutes";
import Loader from "../../Components/loader/Loader";
import styles from "./MovieDetailsPage.module.css";
import searchApi from "../../services/api";

class MovieDetailsPage extends Component {
  state = {
    title: null,
    poster_path: null,
    overview: null,
    vote_average: null,
    genres: [],
  };

  async componentDidMount() {
    // const KEY = "c07e91d5d5c572c0bf5dabe0ae7a4fc6";
    // const BASE_URL = "https://api.themoviedb.org/3";
    const { movieId } = this.props.match.params;
    // console.log(movieId);
    // const response = await axios.get(
    //   `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
    // );
    // console.log(response.data);
    const response = await searchApi.getMovieDetailsApi(movieId);
    this.setState({
      ...response,
    });
  }

  handelClick = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || "/");
  };

  render() {
    const { match } = this.props;
    const { title, poster_path, overview, vote_average, genres } = this.state;
    return (
      <>
        <button onClick={this.handelClick} type="button">
          Go back
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <h1>{title}</h1>
        <p>{`User vote: ${vote_average}`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <div>Additional information</div>
        <div className={styles.containerDivNav}>
          {/* {movieDetailsPageRoutes.map((route) => {
            <li key={route.path}>
              <NavLink
                exact={route.exact}
                to={route.path}
                // component={route.component}
                className={styles.app}
                activeClassName={styles.acvive}
              >
                {route.name}
              </NavLink>
            </li>;
          })} */}
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </div>
        <Suspense fallback={<Loader />}>
          <Switch>
            {movieDetailsPageRoutes.map((route) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
            {/* <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} /> */}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
