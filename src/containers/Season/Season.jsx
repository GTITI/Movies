import React, { Component } from "react";
import { Breakpoint } from "react-socks";

import "../../components/TvShow/TvShowList.scss";
import { Episode } from "../../components/Episode/Episode";
import { getTvShowEpisodesBySeason } from "../../services/tvShowsAPI";

export default class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    if (this.props.season) {
      try {
        const seasonEpisodes = await getTvShowEpisodesBySeason(
          this.props.tvShowId,
          this.props.seasonNr
        );
        this.setState({
          loading: false,
          seasonEpisodes,
          error: false,
        });
      } catch (err) {
        this.setState({ loading: false, error: true });
      }
    }
  }

  render() {
    const { season } = this.props;

    if (this.state.error) {
      return (
        <h3>Woops, something went wrong trying to fetch tvShow details.</h3>
      );
    }

    return (
      <div className='season'>
        <Breakpoint medium up>
          <h1>{season.name}</h1>
          <div className="tvShowSeason-list">
            {this.state.seasonEpisodes &&
              this.state.seasonEpisodes.episodes.map((episode) => (
                <Episode
                  episode={episode}
                  key={episode.id}
                  seasonNr={this.props.seasonNr}
                  tvShowId={this.props.tvShowId}
                />
              ))}
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <h1>{season.name}</h1>
          <div className="tvShow-list-mobile">
            {this.state.seasonEpisodes &&
              this.state.seasonEpisodes.episodes.map((episode) => (
                <Episode
                  episode={episode}
                  key={episode.id}
                  seasonNr={this.props.seasonNr}
                  tvShowId={this.props.tvShowId}
                />
              ))}
          </div>
        </Breakpoint>
      </div>
    );
  }
}
