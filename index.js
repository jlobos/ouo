const fetch = require('node-fetch')

module.exports = ({ key, url }) =>
  fetch(`http://ouo.io/api/${key}?s=${encodeURIComponent(url)}`).then(res =>
    res.text()
  )
