# ouo

Shorten URLs using OUO.io and earn money :moneybag:

## Install

```bash
$ npm install --save ouo
```

## Usage

```js
const short = require('ouo')

short({ key: 'kZrfrYdn', url: 'https://www.google.com' })
.then(shortenedUrl => {
  console.log(shortenedUrl)
  // http://ouo.io/K60dXX
})
```

## License

MIT
