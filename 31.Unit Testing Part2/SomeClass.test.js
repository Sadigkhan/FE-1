const Lodash = require('./SomeClass');

describe('Lodash compact', () => {
	const _ = new Lodash();
	let array;

	beforeEach(() => {
		array = [false, 42, 0, '', true, null, 'hello'];
	})

	test('should be defined', () => {
		expect(_.compact).toBeDefined();
		expect(_.compact).not.toBeUndefined()
	})

	test('should remove falsy values from array', () => {
		const result = [42, true, 'hello'];

		expect(_.compact(array)).toEqual(result);
	})
	
	test('should NOT contain falsy values', () => {
        console.log(_.compact(array))
		expect(_.compact(array)).not.toContain(false);
		expect(_.compact(array)).not.toContain(0);
		expect(_.compact(array)).not.toContain(null);
		expect(_.compact(array)).not.toContain('');
	})
})

describe('Lodash groupBy', () => {
	const _ = new Lodash();

	test('should be defined', () => {
		expect(_.groupBy).toBeDefined();
		expect(_.groupBy).not.toBeUndefined()
	})

	test('should group array items by Math.floor', () => {
		const array = [2.2, 2.4, 4.2, 3.1,7.1,7.2];

		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1],
			7: [7.1,7.2]
		}

		expect(_.groupBy(array, Math.floor)).toEqual(result);
	})
	
	test('should group array items by length', () => {
		const array = ['one', 'two', 'three']
		const result = {
			5: ['three'],
			3: ['one', 'two']
		}

		expect(_.groupBy(array, 'length')).toEqual(result); 
	})
})