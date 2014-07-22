var crypto = require('crypto');

// Calculates Pseudorandom SHA1 as defined in http://tools.ietf.org/html/rfc5246 (5.  HMAC and the Pseudorandom Function)
module.exports = function (secret, seed, keySize) {
	keySize = keySize || 256;

	var clientBytes = new Buffer(secret, 'base64');
	var serverBytes = new Buffer(seed, 'base64');

	var sizeBytes = keySize / 8;
	var sha1DigestSizeBytes = 160 / 8; // 160 is the length of sha1 digest

	var buffer1 = serverBytes;
	var buffer2 = new Buffer(sha1DigestSizeBytes + serverBytes.length);
	var pshaBuffer = new Buffer(sizeBytes)

	var i = 0;

	var temp = null;

	while (i < sizeBytes) {
		buffer1 = new Buffer(crypto.createHmac('sha1', clientBytes)
			.update(buffer1).digest(), 'binary');

		buffer1.copy(buffer2);
		serverBytes.copy(buffer2, sha1DigestSizeBytes);

		temp = new Buffer(crypto.createHmac('sha1', clientBytes)
			.update(buffer2).digest(), 'binary');

		for (var x = 0; x < temp.length; x++) {
			if (i < sizeBytes) {
				pshaBuffer[i] = temp[x];
				i++;
			} else {
				break;
			}
		};
	}

	return pshaBuffer.toString('base64');
}

		