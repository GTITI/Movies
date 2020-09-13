import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import * as tvShowAPI from "../../services/tvShowsAPI";
import TvShowList from "../../components/TvShow/TvShowList";
import "./TvShowSearch.scss";

export default class TvShowSearch extends Component {
  state = {
    value: "",
    tvShows: null,
    error: false,
    loading: false,
    prevSearch: null,
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      this.setState({ loading: true });
      const tvShows = await tvShowAPI.searchTvShows(this.state.value);
      this.setState({
        tvShows,
        loading: false,
        prevSearch: this.state.value,
        value: "",
      });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    const { tvShows, error, loading, prevSearch } = this.state;
    let tvShowInfo = null;

    if (tvShows) {
      if (tvShows.length === 0) {
        tvShowInfo = (
          <h3>No tvShows match your search terms. Please try again.</h3>
        );
      } else if (tvShows.length > 0) {
        tvShowInfo = (
          <>
            <h2>TvShow Results for: {prevSearch}</h2>
            <TvShowList
              loading={this.state.loading}
              error={this.state.error}
              tvShows={this.state.tvShows}
            />
          </>
        );
      }
    }

    if (error) {
      tvShowInfo = (
        <h3>
          Woops, something went wrong trying to find tvShows with titles like
          your search.
        </h3>
      );
    }

    if (loading) {
      tvShowInfo = <h3>Searching tvShows now...</h3>;
    }

    return (
      <>
        <h1>TvShow Search</h1>
        <form className="search-form-wrapper" onSubmit={this.handleSubmit}>
          <Breakpoint medium up>
            <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">
                  Search TvShow Titles Here:
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Large"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="TvShow title"
                aria-describedby="inputGroup-sizing-sm"
              />
              <button class="btn btn-secondary" type="submit">
                Search
              </button>
            </div>
          </Breakpoint>
          <Breakpoint small down>
            <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                Search TvShow Titles Here:
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="TvShow title"
                aria-describedby="inputGroup-sizing-sm"
              />
              <button class="btn btn-secondary" type="submit">
                Search
              </button>
            </div>
          </Breakpoint>
        </form>
        {tvShowInfo ? tvShowInfo : null}
      </>
    );
  }
}
