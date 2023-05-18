const API = 'https://api.themoviedb.org/3'

export default function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3Y'
      + 'jY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NT'
      + 'I4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA'
      + '93tbzr6-rxD0760tssAAaSppyjRv9anArs',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((result) => result.json())
}
