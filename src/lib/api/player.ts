import axiosFetch from './axios';

const player = {
  crawling: () => {
    return axiosFetch<undefined>('get', 'api/player/crawling');
  },
  getPlayers: () => {
    return axiosFetch<Player[]>('get', '/api/player/all');
  }
}

export default player;
