import { atom } from 'recoil';
import { PageParam } from './types/page';

export const pageParamState = atom<PageParam>({
  key: 'pageParam',
  default: {
    page: 1,
    size: 25,
  }
});
