const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
	it('should add two numbers', () => {
		var res = utils.add(33, 11);
		// if(res !== 44) {
		// 	throw new Error(`Expected 44, but got ${res}`);
		// }
		expect(res).toBe(44).toBeA('number');
	});

	it('should async add two numbers', (done) => {
		var res = utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should async square a numbers', (done) => {
		var res = utils.asyncSquare(4, (square) => {
			expect(square).toBe(16).toBeA('number');
			done();
		});
	});

	it('should square a number', () => {
		var res = utils.square(5);
		// if(res != 25) {
		// 	throw new Error(`Expected 25, but got ${res}`)
		// }
		expect(res).toBe(25).toBeA('number');
	});


	describe('split firstname and lastname', () => {
		it('should verify first and last names are set', () => {
			let obj = {
				age: 23,
				location: 'Visakhapatnam'
			}

			let res = utils.setName(obj, 'Chandra Sekhar');

			expect(res)
				.toInclude({
					firstName : 'Chandra',
					lastName : 'Sekhar'
				})
				.toBeA('object');
		});
	})
	
});




// it('should expect some values', () => {
// 	expect(12).toNotBe(11);
// 	expect({name: 'chandu'}).toEqual({name : 'chandu'});
// 	expect({name: 'chandu'}).toNotEqual({name : 'jannu'});
// 	expect([1,2,3]).toInclude(1);
// 	expect([1,2,3]).toExclude(5);
// 	expect({
// 		name: 'chandu',
// 		age: 24,
// 		location: 'vskp'
// 	}).toInclude({
// 		age: 24
// 	})

// 	expect({
// 		name: 'chandu',
// 		age: 24,
// 		location: 'vskp'
// 	}).toExclude({
// 		age: 23
// 	})

// });
