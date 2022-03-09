import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getPlayerPage, playerState } from '../../../recoil/PlayerState';
import { pageParamState } from '../../../recoil/PageState';
import Loading from '../../Loading';
import NotFound from '../../NotFound';
import Headers from './Headers';
import { Page, PageParam } from '../../../recoil/types/page';
import { Player } from '../../../recoil/types/player';
import PlayerTable from './PlayerTable';
import Search from './Search';

const PlayerList = () => {
  const players = useRecoilValueLoadable<Page<Player[]> | undefined>(getPlayerPage);
  const pageParam = useRecoilValue<PageParam>(pageParamState);
  const [list, setList] = useRecoilState<Player[]>(playerState);

  useEffect(function hello() {
    players.toPromise().then(data => data ? setList(list.concat(data.content)) : list);
    // TODO : 무한 스크롤 작업
  }, [pageParam]);

  switch (players.state) {
    case 'hasValue':
      return (
        <div className='basis-4/5 flex flex-col h-4/5'>
          <Headers />
          <Search />
          <PlayerTable />
        </div>
      );
    case 'loading':
      return (
        <Loading />
      );
    default:
      return (
        <NotFound />
      );
  }
};

export default PlayerList
