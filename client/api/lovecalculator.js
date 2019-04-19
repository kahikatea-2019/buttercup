import request from 'superagent'

const url = 'love-calculator.p.rapidapi.com'
const key = '647b6801f2msh341561f5ad43b39p195ae9jsn9d4043a721e1'
const fname = 'Easter'
const sname = 'Bunny'

export function loveCalc() {
  return request
  .get(url + country + 'apiKey=' + token)
  .then(res => {
    return res.body.articles
  })
}