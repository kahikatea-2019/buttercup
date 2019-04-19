import request from 'superagent'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

export function getDrinks () {
  return request
    .get(url)
    .then(res => res.body)
    .catch(err => console.error(err))
}
