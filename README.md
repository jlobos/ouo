# ouo

Shorten URLs using OUO.io and earn money :moneybag:

> fork of (ouo.io)[https://www.npmjs.com/package/ouo.io] written in es2015

```js
import { OUOio } from 'ouo'

const ouo = new OUOio('kZrfrYdn')

ouo.short('https://www.google.com', (err, url) => {
  console.log(err, url)
})
```

## Installation

```
$ npm i ouo
```

## Testing

```
$ npm i
$ npm test
```
