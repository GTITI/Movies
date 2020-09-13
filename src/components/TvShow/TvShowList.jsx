import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import TvShow from './TvShow';
import Card from '../Card/Card';
import './TvShowList.scss';

export default class TvShowList extends Component {
  state = {
    id: null,
    tvShowDetails: false,
  };

  selectedTvShowHandler = tvShowId => {
    if (tvShowId !== null) {
      this.setState({ id: tvShowId, tvShowDetails: true });
    }
  };

  renderRedirect = () => {
    if (this.state.tvShowDetails) {
      return <Redirect to={`/tvShow/${this.state.id}`} />;
    }
  };

  render() {
    const { error, loading, tvShows } = this.props;
    let tvShowInfo = null;

    if (!loading && !error && tvShows.length > 0) {
      tvShowInfo = tvShows.map(tvShow => {
        return (
          <Card
            key={tvShow.id}
            tvShowId={tvShow.id}
            goToTvShowDetails={this.selectedTvShowHandler}
          >
            <TvShow
              title={tvShow.title}
              overview={tvShow.overview}
              poster={tvShow.poster_path}
              released={tvShow.first_air_date}
            />
          </Card>
        );
      });
    }

    if (error) {
      tvShowInfo = (
        <h3>
          Woops, something went wrong trying to fetch tvShows in theaters now.
        </h3>
      );
    }

    if (loading) {
      tvShowInfo = <h3>Loading tvShow data now...</h3>;
    }

    return (
      <>
        <Breakpoint medium up>
          <div className="tvShow-list">
            {this.renderRedirect()}
            {tvShowInfo}
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <div className="tvShow-list-mobile">
            {this.renderRedirect()}
            {tvShowInfo}
          </div>
        </Breakpoint>
      </>
    );
  }
}
