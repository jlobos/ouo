
import test from 'ava'
import { OUOio } from '../lib/index'

const ouo = new OUOio('kZrfrYdn')

test.cb('short', t => {
  ouo.short('https://www.google.com', (e, r) => {
    t.falsy(e)
    t.is(typeof r, 'string')
    t.end()
  })
})
