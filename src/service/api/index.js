// import ajax from '../../utils/axiosHttp'

// function crearApi(config) {
//   // console.log(config)
//   return async data => {
//     let options = config.options || { method: 'GET' }
//     return ajax(config.url, options, data)
//   }
// }
const modules = {};
// const modulesConfig = {}
// let req = require.context('../../config/api/', true, /^(.*\.(js$))[^.]*$/im)
// req.keys().forEach(function (key) {
//   let _moduleName = key.replace('./', '').replace('.js', '')
//   let obj = req(key).default
//   let API = {}
//   let APIconfig = {}
//   Object.keys(obj).forEach(key => {
//     API[key] = crearApi(obj[key])
//     APIconfig[key] = obj[key]
//   })
//   modules[_moduleName] = API
//   modulesConfig[_moduleName] = APIconfig
// })
// export { modulesConfig }
// console.log(modulesConfig)
// console.log(modules)
export default modules;

function* githubGet(url, token) {
  return yield fetch(`https://api.github.com${url}`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json'
    },
    credentials: 'same-origin'
  });
}

const host = window.location.origin;

function* serverGet(url) {
  return yield fetch(`${host}${url}`, {
    method: 'GET',
    credentials: 'same-origin'
  });
}

function* serverPut(url, data) {
  return yield fetch(`${host}${url}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  });
}

const url = '/rank';

// Ranking list data saved in egg server.
export function* getRankingList() {
  let rsp = yield serverGet(url);
  rsp = yield rsp.json();
  const { list } = rsp;
  return list.sort((a, b) => b.score - a.score);
}

export function* getUserInfo() {
  const info = localStorage.getItem('USER_INFO');
  if (info && info.name) {
    return info;
  }

  // Reuse gitalk access token
  const token = localStorage.getItem('GT_ACCESS_TOKEN');
  if (!token) {
    console.log('Must login to upload score');
    return null;
  }
  let rsp = yield githubGet('/user', token);
  rsp = yield rsp.json();
  console.log(rsp);
  if (rsp && rsp.name) {
    localStorage.setItem('USER_INFO', JSON.stringify(rsp));
  }
  return rsp;
}

export function* updateRankingList(list) {
  console.log('list', list);
  let rsp = yield serverPut(url, { list });
  rsp = yield rsp.json();
  return rsp.list.sort((a, b) => b.score - a.score);
}
