# is-location [![Build Status](https://secure.travis-ci.org/johnotander/is-location.png?branch=master)](https://travis-ci.org/johnotander/is-location)

Check whether an object is a `window.location`, or at least quacks like one.

## Installation

```bash
npm install --save is-location
```

## Usage

```javascript
var isLocation = require('is-location');

isLocation(window.location);  // => true
isLocation(somethingElse);    // => false
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
