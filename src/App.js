import React, { Component, Suspense } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Searchbar from "./Components/searchbar/Searchbar";
import ImageGallery from "./Components/imageGallery/ImageGallery";
import Loader from "./Components/loader/Loader";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import NotFound from "./pages/notFound/NotFound";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import { mainRoutes } from "./routes/mainRoutes";

class App extends Component {
  state = {
    loading: false,
  };

  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className={styles.App}>
        <nav>
          <ul className={styles.list}>
            {/* {mainRoutes.map((route) => {
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
            <li>
              <NavLink
                exact
                to="/"
                className={styles.app}
                activeClassName={styles.acvive}
              >
                HomePage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                exact
                className={styles.app}
                activeClassName={styles.acvive}
              >
                MoviesPage
              </NavLink>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<Loader />}>
          <Switch>
            {mainRoutes.map((route) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
            {/* <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFound} /> */}
          </Switch>
        </Suspense>

        {/* <Searchbar searchProducts={this.handleSubmit} /> */}
        {/* {loading && <Loader />}
        <ImageGallery hits={hits} />
        {!!hits.length && <Button showMore={this.showMore} />} */}
      </div>
    );
  }
}

export default App;
