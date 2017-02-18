# ouo

Shorten URLs using OUO.io and earn money :moneybag:

```js
const short = require('ouo')

short({ key: 'kZrfrYdn', url: 'https://www.google.com' })
.then(shortenedUrl => {
  console.log(shortenedUrl) // http://ouo.io/K60dXX
})
```

## Installation

```console
$ npm install ouo
```

## Testing

```console
$ npm install
$ npm test
```
