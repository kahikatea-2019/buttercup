// {/* <>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
// <script>

// const username = 'badfriday'
// const password = 'kk8yfymd37qn'
// $.ajax({
//   url: 'http://api.eventfinda.co.nz/v/events.json',
//   beforeSend: function (xhr) {
//     xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
//   },
//   success: function(xhr) {
//     console.log(xhr);
//   }
// });
// </script>
// </> */}

import request from 'superagent'

const username = 'badfriday'
const password = 'kk8yfymd37qn'
const url = 'http://api.eventfinda.co.nz/v/events.json'

export function getEvents () {
  return request
    .get(url)
    .set('Authorization', username)
    .set('Basic', password)
    .then(res => {
      console.log(res)
    })
}
