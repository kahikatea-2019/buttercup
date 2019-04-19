import request from 'superagent'


const url = 'https://swapi.co/api/starships/9/'

export function getStarWars () {
  return request
    .get(url)
    .then(res => res.body)
    .catch(err => console.error(err))
}
