import request from 'superagent'

const url = 'api-football-v1.p.rapidapi.com'
const token = '670f61232fmsh7cdd134b6f6bad5p1d303ejsn83f423b5ea4d'

export function football () {
  return request
    .get(url + token)
    .then(res => {
      return res.body
    })
}
