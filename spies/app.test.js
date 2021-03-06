const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

// app.__set__
// app.__get__

describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	}

	app.__set__('db', db);


	it('should call saveUser with user object', () => {
		var email = 'chandu@gmail.com';
		var password = '213abc'
		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	})


	// it('should call the spy correctly', () => {
	// 	var spy = expect.createSpy();
	// 	spy('chandu', 25);
	// 	expect(spy).toHaveBeenCalled();
	// 	expect(spy).toHaveBeenCalledWith('chandu', 25);
	// });
});