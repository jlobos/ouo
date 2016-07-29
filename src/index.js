
import request from 'request'

class OUOio {
  constructor (key) {
    if (!key) throw new Error('key is required')
    this.key = key
  }

  short (link, cb) {
    request({
      uri: `http://ouo.io/api/${this.key}`,
      qs: { s: link }
    }, (error, response, body) => {
      cb(error || (response.statusCode !== 200), body)
    })
  }
}

export { OUOio }
