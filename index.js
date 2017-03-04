const fetch = require('node-fetch')

module.exports = ({ key, url }) => {
  return new Promise((resolve, reject) => {
    fetch(`http://ouo.io/api/${key}?s=${url}`)
    .then(res => {
      if (res.status !== 200) {
        return reject(Error('Error occurred in fetch API'))
      }

      res.text().then(link => resolve(link))
    })
  })
}
