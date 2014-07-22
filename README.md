psha1
==========

P_SHA1 algorithm implemetation as defined in [TLS spec](http://tools.ietf.org/html/rfc5246#section-5) for Node.js.

## WS-Trust Server and Client Entropy Scenarios

This mechanism is used in [WS-Trust spec](http://docs.oasis-open.org/ws-sx/ws-trust/200512/ws-trust-1.3-os.pdf) when calling services that require Server and Client entropy. In these scenarios both keys must be combined to make a shared secret using the PSHA1 algorithm to obtain the computed key.

## Installation

```bash
$ npm install sha1
```

## Usage

### psha1(secret, seed, [keysize])

`keysize` is optional with default value 256.

```javascript

var psha1 = require('psha1');

var key = psha1('GS5olVevYdlK4/rP8=', 'LmF9Mjf9lYMHDx376jA=');

```
