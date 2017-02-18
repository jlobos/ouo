import test from 'ava'
import short from './index'

test('short', async t => {
  t.is(
    await short({ key: 'kZrfrYdn', url: 'https://www.google.com' }),
    'http://ouo.io/K60dXX'
  )
})
