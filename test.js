import test from 'ava'
import short from './index'

test('short', async t => {
  t.is(
    await short({ key: 'CzTTkWg6', url: 'https://www.google.com' }),
    'http://ouo.io/xdaasd'
  )
})

test('short MEGA link', async t => {
  const result = await short({
    key: 'CzTTkWg6',
    url: 'https://mega.nz/#F!lg8WibJY!8auQ5Col_rVfEzG2eaZRDQ'
  })

  t.is(result, 'http://ouo.io/624Ae')
})
