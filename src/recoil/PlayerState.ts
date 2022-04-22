import { atom, selector } from 'recoil';
import { Player } from './types/player';
import API from '../lib/api';
import { Page, PageParam } from './types/page';
import { pageParamState } from './PageState';

export const playerState = atom<Player[]>({
  key: 'playerState',
  default: [],
});

export const selectPlayerState = atom<Player | null>({
  key: 'selectPlayer',
  default: null
});

export const getPlayerPage = selector<Page<Player[]> | undefined>({
  key: 'getPlayerPage',
  get: async ({ get }) => {
    const response = await API.player.getPlayerOfPage(get<PageParam>(pageParamState));
    return response.data;
  },
});


