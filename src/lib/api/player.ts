import { Player } from '../../recoil/types/player';
import axiosFetch from './axios';
import { Page, PageParam } from '../../recoil/types/page';

const player = {
  getPlayerOfPage: (param: PageParam) => axiosFetch<Page<Player[]>>('get', '/api/players/page', param), // TODO : 여기서 에러를 처리하는건 어떠한가?
};

export default player;
