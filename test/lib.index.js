var assert = require('assert');
var psha1 = require('../lib');

describe('lib.index', function() {
	
	it('Should compute key using keysize, client and server keys.', function(done) {
		var key = psha1('GS5olVevYMI4vW1Df/7FUpHcJJopTszp6sodlK4/rP8=', 'LmF9Mjf9lYMa9YkxZDjaRFe6iMAfReKjzhLHDx376jA=', 256);
		
		assert.equal('ZMOP1NFa5VKTQ8I2awGXDjzKP+686eujiangAgf5N+Q=', key);
		done();
	});
})