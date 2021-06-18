import React, { Component } from "react";
import parseQueryString from "../../lib/parseQueryString";
import Searchbar from "../../Components/searchbar/Searchbar";
import { Link } from "react-router-dom";
import styles from "./MoviesPage.module.css";
import searchApi from "../../services/api";

class MoviesPage extends Component {
  state = { data: [] };

  componentDidMount() {
    const currentQuery = parseQueryString(this.props.location.search).query;
    if (currentQuery) {
      this.handleSearch();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const query = parseQueryString(prevProps.location.search).query;
    const currentQuery = parseQueryString(this.props.location.search).query;

    if (query !== currentQuery) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    const { location } = this.props;
    const query = parseQueryString(location.search).query;
    // return fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&query=${query}&language=en-US&page=1&include_adult=false`
    // )
    //   .then((res) => res.json())
    searchApi
      .getSearchInputApi(query)
      .then((data) => this.setState({ data: data.results }));
  };

  handleChange = (evt) => {
    this.setState({ term: evt.target.value });
  };

  handleSubmit = (term) => {
    const { history, location } = this.props;
    const query = parseQueryString(location.search).query;
    if (!term || term === query) {
      return;
    }

    history.push(`/movies?query=${term}`);
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Searchbar searchProducts={this.handleSubmit} />
        <h2>MoviesPage</h2>;
        <ul className={styles.list}>
          {data.map((item) => (
            <Link
              to={{
                pathname: `/movies/${item.id}`,
              }}
            >
              <li key={item.id} className={styles.item}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt=""
                />
              </li>
            </Link>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
