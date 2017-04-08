let chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('test OK', () => {

	it('returns OK', (done) => {

		jest.mock('../v', () => {
			return () => 'OK';
		})

		const server = require('../u');

		chai.request(server).get("/?ok=1").then((res) => {
			expect(res.text).toBe('OK')
			done()
		})
	})

	it('returns BAD', (done) => {

		jest.unmock('../v')
		jest.resetModules();
		
		const server = require('../u');

		chai.request(server).get("/?ok=0").then((res) => {
			expect(res.text).toBe('BAD')
			done()
		})
	})

})