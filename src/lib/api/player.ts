import axiosFetch from './axios';

const player = {
  crawling: () => {
    return axiosFetch('get', 'api/player/crawling');
  },
  getPlayers: () => {
    return axiosFetch('get', '/api/player/all');
  }
}

export default player;
