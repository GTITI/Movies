import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import { getTvShowDetailsById } from '../../services/tvShowsAPI';
import TvShowDetails from './TvShowDetails';
import TvShowDetailsMobile from './TvShowDetailsMobile';
import './TvShowDetailsContainer.scss';

class TvShowDetailsContainer extends Component {
  state = {
    tvShowInfo: null,
    loading: true,
    error: true
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      try {
        const tvShowInfo = await getTvShowDetailsById(this.props.match.params.id);
        
        this.setState({
          loading: false,
          tvShowInfo,
          error: false
        });
      } catch (err) {
        this.setState({ loading: false, error: true });
      }
    }
  }

  render() {
    const { tvShowInfo, loading, error } = this.state;

    let tvShowDetails = null;

    if (error) {
      tvShowDetails = (
        <h3>Woops, something went wrong trying to fetch tvShow details.</h3>
      );
    }

    if (loading) {
      tvShowDetails = (
        <>
          <h1>TvShow Details</h1>
          <h3>Loading tvShow details now...</h3>
        </>
      );
    }

    if (!loading && tvShowInfo) {
      tvShowDetails = (
        <div className="tvShow-details-wrapper">
          <div className="tvShow-details-title">
            <i
              className="fa fa-chevron-left"
              onClick={() => this.props.history.push('/')}
              aria-hidden="true"
            />
            <h1>{tvShowInfo.name}</h1>
          </div>
          <Breakpoint medium down>
            <TvShowDetailsMobile
              tvShowInfo={tvShowInfo}
            />
          </Breakpoint>
          <Breakpoint large up>
            <TvShowDetails
              pathname={'/'}
              tvShowInfo={tvShowInfo}
            />
          </Breakpoint>
        </div>
      );
    }

    return <>{tvShowDetails}</>;
  }
}
export default TvShowDetailsContainer;
