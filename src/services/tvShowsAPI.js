import axios from "axios";
import { API_KEY, BASE_TV_PATH, SEARCH_TV_PATH } from "../constants/Constants";

export let genres = [];

export const searchTvShows = async (searchInput) => {
  try {
    const response = await axios.get(
      `${SEARCH_TV_PATH}?query=${searchInput}&${API_KEY}`
    );
    return response.data.results;
  } catch (err) {
    console.error(`There was a problem finding tv shows: ${err}`);
    throw err;
  }
};

export const getTvShowDetailsById = async (tvShowId) => {
  try {
    const response = await axios.get(`${BASE_TV_PATH}${tvShowId}?${API_KEY}`);
    return response.data;
  } catch (err) {
    console.error(
      `There was a problem finding the details of this tv show: ${err}`
    );
    throw err;
  }
};

export const getTvShowEpisodesBySeason = async (tvShowId, seasonNr) => {
  try {
    const response = await axios.get(
      `${BASE_TV_PATH}${tvShowId}/season/${seasonNr}?${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.error(
      `There was a problem finding the details of this tv show: ${err}`
    );
    throw err;
  }
};

export const getEpisodeDetails = async (tvShowId, seasonNr, episodeNr) => {
  try {
    const response = await axios.get(
      `${BASE_TV_PATH}${tvShowId}/season/${seasonNr}/episode/${episodeNr}?${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.error(
      `There was a problem finding the details of this tv show: ${err}`
    );
    throw err;
  }
};
