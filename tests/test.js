let u;

describe('test OK', () => {

	it('returns OK', () => {
		jest.mock('../v', () => {
			return () => 'OK';
		})
		expect(require('../u')).toBe('OK')
	})

	it('returns BAD', () => {

		jest.unmock('../v')
		jest.resetModules();
		
		expect(require('../u')).toBe('BAD')
	})

})