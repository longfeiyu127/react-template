import { put, takeEvery, select, all } from 'redux-saga/effects';
import {
  getRankingList,
  getUserInfo,
  updateRankingList as update
} from '../../api';
import { GAMEOVER } from '../reducers/ranking';

const testData = [
  {
    email: 'devrsi0n@gmail.com',
    profile_url: 'https://github.com/devrsi0n',
    name: 'devrsi0n',
    avatar_url: 'https://avatars3.githubusercontent.com/u/7880675?s=460&v=4',
    score: 56100
  },
  {
    email: null,
    profile_url: 'https://github.com/qianmofeiyu',
    name: 'qianmofeiyu',
    avatar_url: 'https://avatars3.githubusercontent.com/u/32697970?v=4',
    score: 51230
  },
  {
    email: null,
    profile_url: 'https://github.com/Xingli23',
    name: 'Xingli23',
    avatar_url: 'https://avatars1.githubusercontent.com/u/11779203?s=400&v=4',
    score: 50692
  },
  {
    email: null,
    profile_url: 'https://github.com/eennoo',
    name: 'eennoo',
    avatar_url: 'https://avatars3.githubusercontent.com/u/18671018?s=400&v=4',
    score: 50140
  },
  {
    email: null,
    profile_url: 'https://github.com/marzlia',
    name: 'marzlia',
    avatar_url: 'https://avatars2.githubusercontent.com/u/2350264?s=400&v=4',
    score: 49240
  },
  {
    email: null,
    profile_url: 'https://github.com/CristL',
    name: 'CristL',
    avatar_url: 'https://avatars0.githubusercontent.com/u/12232386?s=400&v=4',
    score: 42120
  },
  {
    email: null,
    profile_url: 'https://github.com/Jabinzou',
    name: 'Jabinzou',
    avatar_url: 'https://avatars2.githubusercontent.com/u/14176629?s=400&v=4',
    score: 39048
  },
  {
    email: null,
    profile_url: 'https://github.com/danielfengyu',
    name: 'danielfengyu',
    avatar_url: 'https://avatars3.githubusercontent.com/u/9031507?s=400&v=4',
    score: 35612
  },
  {
    email: null,
    profile_url: 'https://github.com/xiawenhu',
    name: 'xiawenhu',
    avatar_url: 'https://avatars1.githubusercontent.com/u/32698452?s=400&v=4',
    score: 32288
  },
  {
    email: null,
    profile_url: 'https://github.com/Marlon2',
    name: 'Marlon2',
    avatar_url: 'https://avatars3.githubusercontent.com/u/4652178?s=400&v=4',
    score: 29608
  }
];

function getData() {
  return new Promise(resolve => setTimeout(() => resolve(testData), 1500));
}

export function* getThenSetRankingList() {
  // const rsp = yield getRankingList();
  const rsp = yield getData();
  yield put({ type: 'SET_RANKING_LIST', data: rsp });
}

export function* watchGetRankingList() {
  yield takeEvery('GET_RANKLING_LIST', getThenSetRankingList);
}

const getScore = state => state.present.board.present.score;
const getBestScore = state => state.present.board.present.bestScore;

export function* updateRankingList() {
  const score = yield select(getScore);
  const bestScore = yield select(getBestScore);
  if (score < bestScore) {
    return;
  }
  const info = yield getUserInfo();
  if (!info) {
    return;
  }
  // eslint-disable-next-line
  const { email, html_url, name, avatar_url } = info;

  // Get latest list
  const list = yield getRankingList();
  const newUser = {
    email,
    profile_url: html_url,
    name,
    avatar_url,
    score
  };
  const sameOne = list.find(item => item.name === name && item.email === email);
  if (sameOne) {
    // Update new record
    if (score > sameOne.score) sameOne.score = score;
    else return;
  } else if (list.length < 10) {
    // Push to array
    list.push(newUser);
  } else {
    // Insert into array
    const idx = list.findIndex(item => score > item.score);
    if (idx === -1) return; // Not break record

    list.splice(idx, 0, newUser);
  }

  const rsp = yield update(list.slice(0, 10).sort((a, b) => b.score - a.score));
  yield put({ type: 'SET_RANKING_LIST', data: rsp });
}

export function* watchGameOver() {
  yield takeEvery(GAMEOVER, updateRankingList);
}

export default function* rootSaga() {
  yield all([watchGetRankingList(), watchGameOver()]);
}
